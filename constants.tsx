import React from 'react';
import { Section } from './types';
import { SpeedComparisonChart } from './components/Visualizations';
import { Clock, Activity, Shield, AlertTriangle } from 'lucide-react';

export const SECTIONS: Section[] = [
  {
    id: 'intro',
    title: 'Introduction',
    subtitle: 'The Physical Reality of Musical Excellence',
    readTime: 3,
    content: (
      <div className="prose prose-slate max-w-none">
        <p>
          For centuries, violin pedagogy has operated on intuition, tradition, and the accumulated wisdom of master teachers. We've spoken of "talent," "musicality," and "natural ability" as if they were mystical qualities bestowed by providence. But modern neuroscience has revealed something far more profound and actionable: musical mastery is not a gift from the muses—it is the systematic construction of specialized brain architecture.
        </p>
        <p>
          At the heart of this architecture lies myelin, a fatty insulation that wraps around neural pathways like rubber coating on copper wire. This biological substance, produced by cells called oligodendrocytes, is the physical manifestation of skill. When you watch Hilary Hahn execute a flawless rapid passage or hear Itzhak Perlman's singing tone, you are witnessing the result of millions of precisely myelinated neural circuits firing in exquisite coordination.
        </p>
        <p>
          This article presents a comprehensive exploration of how myelination works, why it matters for violin teaching, and how to structure practice to optimize this fundamental neurobiological process. Understanding these principles doesn't diminish the beauty of music—it empowers us to create that beauty more reliably, more quickly, and with less frustration for our students.
        </p>
      </div>
    )
  },
  {
    id: 'part-1',
    title: 'Part I: Biological Foundation',
    subtitle: 'Myelin: The Broadband of the Brain',
    readTime: 5,
    content: (
      <div className="prose prose-slate max-w-none">
        <h3>Understanding Myelin: The Broadband of the Brain</h3>
        <p>
          Myelin is a lipid-rich substance that wraps around the axons of neurons in a spiral pattern, creating what looks like beads on a string when viewed under a microscope. Each "bead" is actually a segment of myelin sheath created by a single oligodendrocyte, with tiny gaps between segments called nodes of Ranvier.
        </p>
        
        <div className="my-8 flex justify-center">
            <a href="https://ibb.co/JRsQ03D6" target="_blank" rel="noopener noreferrer">
                <img src="https://i.ibb.co/7J148ksM/myelin.jpg" alt="myelin structure diagram" className="rounded-xl shadow-md max-w-full md:max-w-lg" />
            </a>
        </div>

        <p>
          The function of myelin is elegantly simple yet profoundly important: it increases the speed of electrical signal transmission along the axon by up to 100 times. This isn't a minor improvement—it's the difference between beginner and virtuoso.
        </p>
        
        <SpeedComparisonChart />

        <p>But speed is only part of the story. Myelin also provides:</p>
        <ul className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <li className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <strong className="block text-indigo-700 mb-1">Signal Precision</strong>
                <span className="text-slate-600 text-sm">By insulating the axon, myelin prevents electrical signals from "leaking" to adjacent neurons, ensuring that the intended movement—and only that movement—is executed.</span>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <strong className="block text-indigo-700 mb-1">Timing Accuracy</strong>
                <span className="text-slate-600 text-sm">The nodes of Ranvier create precise points where the signal regenerates, allowing for extraordinarily exact timing between neural signals. This is critical for coordinating the dozens of muscles involved in complex violin movements.</span>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <strong className="block text-indigo-700 mb-1">Energy Efficiency</strong>
                <span className="text-slate-600 text-sm">Myelinated neurons require far less cellular energy to transmit signals, allowing the brain to maintain complex movement patterns without exhaustion.</span>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <strong className="block text-indigo-700 mb-1">Signal Synchronization</strong>
                <span className="text-slate-600 text-sm">Multiple myelinated pathways can fire in precise coordination, enabling the simultaneous control of bow speed, pressure, contact point, and sounding point that defines advanced violin technique.</span>
            </li>
        </ul>

        <h3>The Oligodendrocyte: Your Brain's Master Craftsman</h3>
        <p>
          If myelin is the insulation, oligodendrocytes are the skilled workers who install it. Understanding how these cells operate is crucial for effective teaching.
        </p>
        <p>
          Oligodendrocytes begin as precursor cells called OPCs (oligodendrocyte precursor cells) that are distributed throughout the brain's white matter. When a neural pathway fires repeatedly, the electrical activity triggers a cascade of chemical signals:
        </p>
        <ul className="list-disc pl-5 mb-4">
            <li><strong>Activity Detection:</strong> Repeated neural firing releases glutamate and other neurotransmitters that OPCs can detect.</li>
            <li><strong>Chemical Signaling:</strong> The active neurons release adenosine, which signals OPCs to begin differentiation into mature oligodendrocytes.</li>
            <li><strong>Myelin Production:</strong> The mature oligodendrocyte extends multiple processes (up to 50 or more) to nearby axons and begins wrapping them in myelin sheaths.</li>
            <li><strong>Progressive Wrapping:</strong> Each oligodendrocyte can myelinate up to 50 different axon segments, gradually increasing the thickness of myelin with continued use of the pathway.</li>
        </ul>
        <p>
            Here's the crucial insight for teachers: <strong>oligodendrocytes respond to activity, not accuracy</strong>. They cannot distinguish between a perfectly executed shift and a consistently executed wrong note. They simply detect that a pathway is firing frequently and wrap it in myelin accordingly.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 italic text-amber-900 font-medium">
            "Practice makes permanent. Only perfect practice makes perfect."
        </div>

        <h3>The Three-Phase Process of Motor Learning</h3>
        <p>Myelination doesn't happen in isolation. It's the final step in a three-phase process that every new motor skill must pass through.</p>
        
        <div className="my-8 flex justify-center">
            <a href="https://ibb.co/2YHjYPZv" target="_blank" rel="noopener noreferrer">
                <img src="https://i.ibb.co/3YQ0YWRp/cognitive.jpg" alt="cognitive phase diagram" className="rounded-xl shadow-md max-w-full md:max-w-lg" />
            </a>
        </div>

        <div className="space-y-4 not-prose mt-4">
             <div className="p-4 bg-slate-100 rounded-lg">
                <h5 className="font-bold text-slate-800">Phase 1: Cognitive (High Error, High Attention)</h5>
                <p className="text-sm text-slate-600 mt-1">The student is learning what to do. Every movement requires conscious attention and verbal instruction. The motor cortex is highly active, as is the prefrontal cortex (responsible for conscious control). Error rates are high because the neural pathways don't yet exist—the student is literally forging new connections with each attempt.</p>
             </div>
             <div className="p-4 bg-slate-100 rounded-lg">
                <h5 className="font-bold text-slate-800">Phase 2: Associative (Decreasing Error, Moderate Attention)</h5>
                <p className="text-sm text-slate-600 mt-1">The basic pathway exists but is weak and unreliable. The student knows what to do but must concentrate to do it correctly. This is when the early stages of myelination begin—the pathway has been "carved" through repeated use, and oligodendrocytes are beginning to insulate it.</p>
             </div>
             <div className="p-4 bg-slate-100 rounded-lg">
                <h5 className="font-bold text-slate-800">Phase 3: Autonomous (Low Error, Low Attention)</h5>
                <p className="text-sm text-slate-600 mt-1">The pathway is heavily myelinated. The movement is fast, automatic, and reliable. It no longer requires conscious attention and can be executed even under stress or while simultaneously performing other tasks (like listening for intonation while managing bow distribution).</p>
             </div>
        </div>
      </div>
    )
  },
  {
    id: 'part-2',
    title: 'Part II: Neurochemistry',
    subtitle: 'The Neurochemistry of Effective Learning',
    readTime: 4,
    content: (
      <div className="prose prose-slate max-w-none">
        <h3>The Three Essential Chemicals for Myelination</h3>
        <p>
            While oligodendrocytes respond to neural activity, the quality and permanence of learning depends on the presence of three key neuromodulators. Understanding these chemicals transforms how we design practice sessions and respond to student frustration.
        </p>
        
        <div className="my-8 flex justify-center">
            <a href="https://ibb.co/RpFsJLvQ" target="_blank" rel="noopener noreferrer">
                <img src="https://i.ibb.co/tMGv1ymY/dopamine.jpg" alt="dopamine diagram showing synaptic transmission" className="rounded-xl shadow-md max-w-full md:max-w-lg" />
            </a>
        </div>

        <h3>The Ideal Neurochemical State: Flow</h3>
        <p>When all three chemicals are present in optimal amounts, students enter what psychologist Mihaly Csikszentmihalyi called "flow state":</p>
        
        <div className="my-8 flex justify-center">
            <a href="https://ibb.co/CCmMjhg" target="_blank" rel="noopener noreferrer">
                <img src="https://i.ibb.co/pVbRHJc/epinefphrine.jpg" alt="epinefphrine" className="rounded-xl shadow-md max-w-full md:max-w-lg" />
            </a>
        </div>

        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Epinephrine</strong> creates alertness without anxiety</li>
            <li><strong>Acetylcholine</strong> enables intense focus on the task</li>
            <li><strong>Dopamine</strong> provides ongoing motivation and consolidation</li>
        </ul>
        <p>In flow, time seems to pass quickly, effort feels effortless, and learning accelerates dramatically. Your role as a teacher is to engineer the conditions that make flow possible.</p>
      </div>
    )
  },
  {
    id: 'part-3',
    title: 'Part III: Deep Practice',
    subtitle: 'The Master Protocol for Myelination',
    readTime: 4,
    content: (
      <div className="prose prose-slate max-w-none">
        <h3>The Deep Practice Cycle</h3>
        <p>
            Not all practice is created equal. Mindless repetition builds myelin, but it often wraps the wrong pathways. Deep practice is a specific protocol designed to maximize correct myelination while minimizing the insulation of errors.
        </p>

        <div className="my-8 flex justify-center">
            <a href="https://ibb.co/4RgGkj3P" target="_blank" rel="noopener noreferrer">
                <img src="https://i.ibb.co/9H3LPqSs/deepcycle.jpg" alt="deep practice cycle diagram" className="rounded-xl shadow-md max-w-full md:max-w-lg" />
            </a>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm my-6 not-prose">
            <ol className="relative border-l border-indigo-200 ml-3 space-y-6">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 ring-8 ring-white">
                        <span className="text-indigo-800 font-bold text-xs">1</span>
                    </span>
                    <h4 className="flex items-center mb-1 text-lg font-semibold text-slate-900">Target Selection</h4>
                    <p className="mb-4 text-base font-normal text-slate-500">Choose a small, specific element to improve.</p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 ring-8 ring-white">
                        <span className="text-indigo-800 font-bold text-xs">2</span>
                    </span>
                    <h4 className="flex items-center mb-1 text-lg font-semibold text-slate-900">Attempt</h4>
                    <p className="mb-4 text-base font-normal text-slate-500">Execute the movement with full attention.</p>
                </li>
                 <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 ring-8 ring-white">
                         <span className="text-indigo-800 font-bold text-xs">3</span>
                    </span>
                    <h4 className="flex items-center mb-1 text-lg font-semibold text-slate-900">Error Detection</h4>
                    <p className="mb-4 text-base font-normal text-slate-500">Immediately identify what wasn't quite right.</p>
                </li>
                 <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 ring-8 ring-white">
                         <span className="text-indigo-800 font-bold text-xs">4</span>
                    </span>
                    <h4 className="flex items-center mb-1 text-lg font-semibold text-slate-900">Adjustment</h4>
                    <p className="mb-4 text-base font-normal text-slate-500">Make a specific change to address the error.</p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 ring-8 ring-white">
                         <span className="text-indigo-800 font-bold text-xs">5</span>
                    </span>
                    <h4 className="flex items-center mb-1 text-lg font-semibold text-slate-900">Immediate Retry</h4>
                    <p className="mb-4 text-base font-normal text-slate-500">Attempt the same element again with the adjustment.</p>
                </li>
                <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 ring-8 ring-white">
                         <span className="text-indigo-800 font-bold text-xs">6</span>
                    </span>
                    <h4 className="flex items-center mb-1 text-lg font-semibold text-slate-900">Repetition</h4>
                    <p className="mb-4 text-base font-normal text-slate-500">Continue the cycle until consistency is achieved.</p>
                </li>
            </ol>
        </div>
      </div>
    )
  },
  {
    id: 'part-4',
    title: 'Part IV: Slow Practice',
    subtitle: 'The Architecture of Slow Practice',
    readTime: 3,
    content: (
      <div className="prose prose-slate max-w-none">
        <h3>Why Slow Practice Is Non-Negotiable for Myelination</h3>
        <p>
            The single most common error in practice is playing too fast—attempting to execute movements at speeds that exceed current myelination levels. The problem with premature speed is that errors happen too quickly to detect and correct (no error-correction cycle = no learning).
        </p>

        <h3>The Slow Practice Protocol</h3>
        <div className="not-prose overflow-hidden rounded-lg border border-slate-200 shadow-sm my-6">
            <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Phase</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Goal</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tempo (% of Target)</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Requirement</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                    <tr>
                        <td className="px-6 py-4 text-sm font-medium text-slate-900">1. Establish Pattern</td>
                        <td className="px-6 py-4 text-sm text-slate-500">Perfect execution of all details</td>
                        <td className="px-6 py-4 text-sm text-slate-500">50-60%</td>
                        <td className="px-6 py-4 text-sm text-slate-500">10 perfect reps</td>
                    </tr>
                    <tr className="bg-slate-50">
                        <td className="px-6 py-4 text-sm font-medium text-slate-900">2. Build Reliability</td>
                        <td className="px-6 py-4 text-sm text-slate-500">Maintain correctness with speed</td>
                        <td className="px-6 py-4 text-sm text-slate-500">70-80%</td>
                        <td className="px-6 py-4 text-sm text-slate-500">6-8 perfect reps</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 text-sm font-medium text-slate-900">3. Approach Performance</td>
                        <td className="px-6 py-4 text-sm text-slate-500">Integrate elements</td>
                        <td className="px-6 py-4 text-sm text-slate-500">90-95%</td>
                        <td className="px-6 py-4 text-sm text-slate-500">4-6 perfect reps</td>
                    </tr>
                    <tr className="bg-slate-50">
                        <td className="px-6 py-4 text-sm font-medium text-slate-900">4. Performance Tempo</td>
                        <td className="px-6 py-4 text-sm text-slate-500">Verify automaticity</td>
                        <td className="px-6 py-4 text-sm text-slate-500">100%</td>
                        <td className="px-6 py-4 text-sm text-slate-500">2-3 perfect reps</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p className="font-semibold text-indigo-700">
            The 80% Rule: Spend 80% of practice time at Phase 1-2 tempos, 15% at Phase 3 tempo, and only 5% at full performance tempo.
        </p>
      </div>
    )
  },
  {
    id: 'part-5',
    title: 'Part V: Violin-Specific Applications',
    subtitle: 'Violin-Specific Applications of Myelination Science',
    readTime: 4,
    content: (
      <div className="prose prose-slate max-w-none">
        <h3>Right Hand Myelination Strategies</h3>
        <h4>Sounding Point Safari (Contact Point Mapping)</h4>
        <p>
            Beautiful tone requires precise coordination between bow speed, pressure, and contact point (distance from bridge). This coordination must become automatic—conscious calculation is too slow for musical performance. Myelination builds an internal "map" of how these variables interact.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-6">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h5 className="font-bold text-amber-900 mb-2">Sul Ponticello</h5>
                <p className="text-sm text-amber-800">Near the bridge, resulting in a bright, metallic tone rich in harmonics.</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <h5 className="font-bold text-emerald-900 mb-2">Normale</h5>
                <p className="text-sm text-emerald-800">In the middle, producing a balanced, resonant tone.</p>
            </div>
             <div className="bg-sky-50 p-4 rounded-lg border border-sky-200">
                <h5 className="font-bold text-sky-900 mb-2">Sul Tasto</h5>
                <p className="text-sm text-sky-800">Over the fingerboard, creating a soft, flute-like tone.</p>
            </div>
        </div>

        <p>
            The practice protocol involves slowly moving between these zones and calibrating bow speed and pressure to achieve the optimal tone at each contact point, building a flexible internal map.
        </p>
      </div>
    )
  },
  {
    id: 'part-7',
    title: 'Part VII: Rest & Sleep',
    subtitle: 'When Myelination Actually Happens',
    readTime: 4,
    content: (
      <div className="prose prose-slate max-w-none">
        <h3>The Paradox of Rest-Based Learning</h3>
        <p>
            Here's the counterintuitive reality: myelination doesn't happen during practice. It happens during rest and sleep. During practice, you're signaling to oligodendrocytes that certain pathways are important. But the actual process of wrapping those axons in myelin occurs when the brain has metabolic resources to devote to construction rather than performance.
        </p>

        <div className="my-8 flex justify-center">
            <a href="https://ibb.co/gZHvgPfJ" target="_blank" rel="noopener noreferrer">
                <img src="https://i.ibb.co/0y8BJF6r/practiceand-rest.jpg" alt="practice and rest consolidation graph" className="rounded-xl shadow-md max-w-full md:max-w-lg" />
            </a>
        </div>

        <p>
            This process is known as offline consolidation. During sleep, particularly during stage 2 non-REM sleep, the brain generates "sleep spindles." These spindles are a sign that the brain is replaying the motor sequences practiced during the day, strengthening the correct pathways and selectively weakening the incorrect ones.
        </p>

        <h3>The 90-Minute Practice Cycle</h3>
        <p>The brain's ultradian rhythms create natural 90-minute cycles of optimal focus and learning capacity.</p>
        <ul className="not-prose space-y-2 mt-4 mb-8">
            <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-indigo-500" />
                <span><strong>Minutes 0-20:</strong> Warm-up period, focus is building.</span>
            </li>
            <li className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-green-500" />
                <span><strong>Minutes 20-70:</strong> Peak focus and learning capacity.</span>
            </li>
            <li className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                <span><strong>Minutes 70-90:</strong> Focus and performance begin to decline.</span>
            </li>
            <li className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-red-500" />
                <span><strong>Minutes 90-120:</strong> Continued practice becomes progressively less effective.</span>
            </li>
        </ul>

        <h3>Micro-Breaks and Neural Replay</h3>
        <p>
            Even within practice sessions, brief breaks dramatically enhance learning. Research shows that during brief 10-15 second pauses after a few repetitions, the brain rapidly replays the motor sequence at high speed. This offline replay is when myelination signals are consolidated.
        </p>
      </div>
    )
  }
];