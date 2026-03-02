import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ACCENT = '#F4C430';
const STAGE_DURATION = 6000;

const storyStages = [
    {
        id: 'morning_depart',
        phase: 'Morning',
        label: 'Bus departs school',
        busPos: 0.15,
        busFacing: 1,
        studentState: 'home',
        notification: { icon: 'bus', title: 'Bus Departed', body: 'Bus has left the school.' },
    },
    {
        id: 'morning_midway',
        phase: 'Morning',
        label: 'En route to pickup',
        busPos: 0.5,
        busFacing: 1,
        studentState: 'home',
        notification: { icon: 'pin', title: '10 Minutes Away', body: 'Bus is 10 min from your stop.' },
    },
    {
        id: 'morning_pickup',
        phase: 'Morning',
        label: 'Student boards bus',
        busPos: 0.85,
        busFacing: 1,
        studentState: 'bus',
        notification: null,
    },
    {
        id: 'morning_dropoff',
        phase: 'Morning',
        label: 'Dropped at school',
        busPos: 0.15,
        busFacing: -1,
        studentState: 'school',
        notification: { icon: 'check', title: 'Arrived at School', body: 'Student dropped safely.' },
    },
    {
        id: 'afternoon_depart',
        phase: 'Afternoon',
        label: 'Bus departs school',
        busPos: 0.15,
        busFacing: 1,
        studentState: 'bus',
        notification: { icon: 'bus', title: 'Heading Home', body: 'Bus has departed the school.' },
    },
    {
        id: 'afternoon_midway',
        phase: 'Afternoon',
        label: 'En route to home',
        busPos: 0.5,
        busFacing: 1,
        studentState: 'bus',
        notification: { icon: 'pin', title: '10 Minutes Away', body: 'Bus is 10 min from your home.' },
    },
    {
        id: 'afternoon_dropoff',
        phase: 'Afternoon',
        label: 'Dropped at home',
        busPos: 0.85,
        busFacing: 1,
        studentState: 'home',
        notification: { icon: 'check', title: 'Arrived Home', body: 'Student dropped safely.' },
    },
    {
        id: 'return',
        phase: 'Return',
        label: 'Bus returns to school',
        busPos: 0.15,
        busFacing: -1,
        studentState: 'home',
        notification: null,
    },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

const IconBus = ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="11" rx="2" stroke={color} strokeWidth="1.5" />
        <path d="M2 8h16" stroke={color} strokeWidth="1.5" />
        <circle cx="6" cy="16" r="1" fill={color} />
        <circle cx="14" cy="16" r="1" fill={color} />
    </svg>
);

const IconPin = ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <path d="M10 2a5 5 0 0 1 5 5c0 3.5-5 11-5 11S5 10.5 5 7a5 5 0 0 1 5-5z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="10" cy="7" r="1.75" stroke={color} strokeWidth="1.5" />
    </svg>
);

const IconCheck = ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke={color} strokeWidth="1.5" />
        <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Clean building icon with simple windows
const IconBuilding = ({ size = 26, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
);

const IconHome = ({ size = 24, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const IconPerson = ({ size = 12, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="3.5" r="2" stroke={color} strokeWidth="1.25" />
        <path d="M2 10.5c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke={color} strokeWidth="1.25" strokeLinecap="round" />
    </svg>
);

const NotifIcon = ({ name }) => {
    const c = ACCENT;
    if (name === 'bus') return <IconBus size={15} color={c} />;
    if (name === 'pin') return <IconPin size={15} color={c} />;
    if (name === 'check') return <IconCheck size={15} color={c} />;
    return null;
};

// ── Bus SVG (untouched) ───────────────────────────────────────────────────────

const BusDiagram = () => (
    <svg width="90" height="38" viewBox="0 0 90 38" fill="none"
        style={{ filter: `drop-shadow(0 8px 24px rgba(244,196,48,0.25))` }}>
        <path d="M2 6C2 3.79086 3.79086 2 6 2H75.4542C78.4385 2 81.2332 3.65584 82.6394 6.28634L87.2625 14.9317C87.7441 15.8329 88 16.8378 88 17.8587V24C88 26.2091 86.2091 28 84 28H6C3.79086 28 2 26.2091 2 24V6Z" fill={ACCENT} />
        <rect x="8" y="6" width="12" height="10" rx="1.5" fill="#1A1A1A" fillOpacity="0.6" />
        <rect x="24" y="6" width="12" height="10" rx="1.5" fill="#1A1A1A" fillOpacity="0.6" />
        <rect x="40" y="6" width="12" height="10" rx="1.5" fill="#1A1A1A" fillOpacity="0.6" />
        <path d="M72 6H78.5C80.5 6 82.5 7.5 83.5 9.5L85.5 16H72V6Z" fill="#1A1A1A" fillOpacity="0.8" />
        <circle cx="20" cy="30" r="6" fill="#111" stroke="#222" strokeWidth="2" />
        <circle cx="68" cy="30" r="6" fill="#111" stroke="#222" strokeWidth="2" />
        <circle cx="20" cy="30" r="2" fill="#333" />
        <circle cx="68" cy="30" r="2" fill="#333" />
    </svg>
);

const StudentBadge = ({ delay = 0 }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { delay, type: 'spring', stiffness: 480, damping: 22 } }}
        exit={{ scale: 0, opacity: 0, transition: { duration: 0.18 } }}
        style={{
            position: 'absolute', top: -9, right: -9,
            width: 22, height: 22, borderRadius: '50%',
            background: '#fff',
            border: '2px solid #141414',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            zIndex: 10,
        }}
    >
        <IconPerson size={11} color="#141414" />
    </motion.div>
);

// ── Main ──────────────────────────────────────────────────────────────────────

export default function HowItWorks() {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setIdx(p => (p + 1) % storyStages.length), STAGE_DURATION);
        return () => clearInterval(t);
    }, []);

    const stage = storyStages[idx];
    const toLeft = (frac) => `${10 + frac * 80}%`;

    return (
        <section
            id="howitworks"
            style={{ fontFamily: "'Inter', sans-serif", background: '#000000' }}
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24"
        >
            {/* Heading */}
            <div className="text-center mb-16 md:mb-20 relative z-1 max-w-2xl mx-auto px-4">
                <h2 className="text-4xl md:text-[44px] font-bold text-white tracking-tight font-montserrat leading-[1.15] mb-4">
                    Every stop. Every update.<br className="hidden sm:block" />
                    <span className="text-[#F4C430]">Zero manual effort.</span>
                </h2>
                <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-base md:text-lg font-inter">
                    Notifications push automatically from GPS no driver input required.
                </p>
            </div>

            {/* Canvas */}
            <div className="relative w-full max-w-[90vw] sm:max-w-[900px] z-1 bg-[#0A0A0A] rounded-2xl border border-white/8 overflow-hidden"
                style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.8)' }}>

                {/* Status bar */}
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 24px',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.02)',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ position: 'relative', width: 8, height: 8, display: 'flex' }}>
                            <motion.span
                                animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                                transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
                                style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: ACCENT }}
                            />
                            <span style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', background: ACCENT }} />
                        </span>
                        <span style={{ color: '#fff', fontSize: 13, fontWeight: 600, fontFamily: 'Montserrat', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Live Journey Simulation
                        </span>
                    </div>

                    {/* Clickable step dots */}
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                        {storyStages.map((s, i) => (
                            <button
                                key={s.id}
                                onClick={() => setIdx(i)}
                                title={`${s.phase} — ${s.label}`}
                                style={{
                                    height: 8,
                                    borderRadius: 4,
                                    width: i === idx ? 24 : 8,
                                    background: i === idx ? ACCENT : 'rgba(255,255,255,0.15)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: 0,
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    outline: 'none',
                                    flexShrink: 0,
                                }}
                                onMouseEnter={e => { if (i !== idx) e.currentTarget.style.background = 'rgba(255,255,255,0.3)'; }}
                                onMouseLeave={e => { if (i !== idx) e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
                            />
                        ))}
                    </div>
                </div>

                {/* Notification + route */}
                <div className="px-5 sm:px-8 pt-10 pb-16">

                    {/* Notification card */}
                    <div className="flex justify-center items-center min-h-[100px] mb-10">
                        <AnimatePresence mode="wait">
                            {stage.notification ? (
                                <motion.div
                                    key={stage.id}
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0, transition: { delay: 1.5, duration: 0.5 } }}
                                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                                    className="flex items-center gap-4 w-full max-w-[90vw] sm:w-[320px] p-4 bg-[#111111] border border-[rgba(244,196,48,0.2)] rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                                >
                                    <div style={{
                                        width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                                        background: 'rgba(244,196,48,0.1)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <NotifIcon name={stage.notification.icon} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: '0 0 4px 0', fontFamily: 'Montserrat' }}>
                                            {stage.notification.title}
                                        </p>
                                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                                            {stage.notification.body}
                                        </p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.p
                                    key={stage.id + '_empty'}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.2 }}
                                    style={{ color: '#fff', fontSize: 12, fontStyle: 'italic', margin: 0 }}
                                >
                                    System Monitoring...
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Route map */}
                    <div className="relative h-[120px] sm:h-[160px]">
                        {/* Road line */}
                        <div style={{ position: 'absolute', bottom: 60, left: '10%', right: '10%', height: 1, background: 'rgba(255,255,255,0.1)' }} />

                        {/* School — building icon */}
                        <div style={{ position: 'absolute', bottom: 30, left: toLeft(0.15), transform: 'translateX(-50%)', textAlign: 'center' }}>
                            <div style={{
                                width: 56, height: 56, borderRadius: 16,
                                background: '#111',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: 12, position: 'relative',
                            }}>
                                <IconBuilding size={26} color="rgba(255,255,255,0.35)" />
                                <AnimatePresence>
                                    {stage.studentState === 'school' && <StudentBadge delay={2} />}
                                </AnimatePresence>
                            </div>
                            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>School</p>
                        </div>

                        {/* Home */}
                        <div style={{ position: 'absolute', bottom: 30, left: toLeft(0.85), transform: 'translateX(-50%)', textAlign: 'center' }}>
                            <div style={{
                                width: 56, height: 56, borderRadius: 16,
                                background: '#111',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: 12, position: 'relative',
                            }}>
                                <IconHome size={26} color="rgba(255,255,255,0.35)" />
                                <AnimatePresence>
                                    {stage.studentState === 'home' && <StudentBadge delay={0} />}
                                </AnimatePresence>
                            </div>
                            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Home</p>
                        </div>

                        {/* Bus */}
                        <motion.div
                            animate={{ left: toLeft(stage.busPos), x: '-50%', scaleX: stage.busFacing }}
                            transition={{ duration: 2.5, ease: [0.65, 0, 0.35, 1] }}
                            style={{ position: 'absolute', bottom: 52, zIndex: 20 }}
                        >
                            <div style={{ position: 'relative' }}>
                                <BusDiagram />
                                <AnimatePresence>
                                    {stage.studentState === 'bus' && <StudentBadge delay={2.5} />}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Progress bar */}
                <div style={{ height: 3, background: 'rgba(255,255,255,0.03)' }}>
                    <motion.div
                        key={idx}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: STAGE_DURATION / 1000, ease: 'linear' }}
                        style={{ height: '100%', background: ACCENT }}
                    />
                </div>
            </div>
        </section>
    );
}
