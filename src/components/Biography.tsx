import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award, Calendar, MapPin, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';
import { IMAGES } from '../assets/images';

export const Biography: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'gurus' | 'performances'>('profile');
  const [readMoreExpanded, setReadMoreExpanded] = useState(false);

  return (
    <section id="biography" className="py-20 sm:py-28 bg-black border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#CC0000]"></span>
            <span className="text-xs font-display tracking-widest text-[#888888] uppercase">
              BIOGRAPHY & TRADITION
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase mb-8">
            BARNIK BASU
          </h2>

          {/* Interactive Sharp Rectangular Tabs */}
          <div className="inline-flex flex-wrap justify-center border border-[#222222] bg-[#0a0a0a] p-1 gap-1">
            <button
              onClick={() => setActiveTab('profile')}
              className={`font-display text-xs sm:text-sm tracking-widest px-6 py-3 uppercase transition-all cursor-pointer font-semibold ${
                activeTab === 'profile'
                  ? 'bg-[#CC0000] text-white'
                  : 'text-[#AAAAAA] hover:text-white hover:bg-[#141414]'
              }`}
            >
              PROFILE
            </button>
            <button
              onClick={() => setActiveTab('gurus')}
              className={`font-display text-xs sm:text-sm tracking-widest px-6 py-3 uppercase transition-all cursor-pointer font-semibold ${
                activeTab === 'gurus'
                  ? 'bg-[#CC0000] text-white'
                  : 'text-[#AAAAAA] hover:text-white hover:bg-[#141414]'
              }`}
            >
              GURUS
            </button>
            <button
              onClick={() => setActiveTab('performances')}
              className={`font-display text-xs sm:text-sm tracking-widest px-6 py-3 uppercase transition-all cursor-pointer font-semibold ${
                activeTab === 'performances'
                  ? 'bg-[#CC0000] text-white'
                  : 'text-[#AAAAAA] hover:text-white hover:bg-[#141414]'
              }`}
            >
              PERFORMANCES
            </button>
          </div>
        </div>

        {/* ================= TAB 1: PROFILE ================= */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Narrative & Milestones */}
            <div className="lg:col-span-8 space-y-8">
              {/* Foundational Milestones Card */}
              <div className="bg-[#0a0a0a] border border-[#222222] p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6 border-b border-[#1c1c1c] pb-3">
                  <span className="w-2.5 h-2.5 bg-[#CC0000]" />
                  <h3 className="font-display text-base tracking-widest text-white uppercase font-bold">
                    FOUNDATIONAL MILESTONES & PEDAGOGY
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-[#CC0000] mt-2 shrink-0" />
                    <div>
                      <div className="font-display text-xs tracking-widest text-[#CC0000] font-bold uppercase">
                        2012 — 2018 • THE GENESIS
                      </div>
                      <h4 className="font-display text-lg text-white font-semibold mb-1">
                        Initial Training under Shri Diptesh Bhattacharya
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-[#999999] leading-relaxed">
                        Barnik's journey began at the age of five under the guidance of Shri Diptesh Bhattacharya, learning the instrument from the very beginning — holding the Sarod and jawa, stroke discipline, jowari sadhana, sargam patterns, and raga architecture.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-[#CC0000] mt-2 shrink-0" />
                    <div>
                      <div className="font-display text-xs tracking-widest text-[#CC0000] font-bold uppercase">
                        2018 — PRESENT • ADVANCED TUTELAGE
                      </div>
                      <h4 className="font-display text-lg text-white font-semibold mb-1">
                        Mentorship under Shri Abir Hussain
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-[#999999] leading-relaxed">
                        Since 2018, pursuing advanced training under Shri Abir Hussain at ITC Sangeet Research Academy, transforming technique into musicality, gayaki ang, nuanced meend, gamak, and complete raga exposition across the Senia-Shahjahanpur tradition.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-[#CC0000] mt-2 shrink-0" />
                    <div>
                      <div className="font-display text-xs tracking-widest text-[#CC0000] font-bold uppercase">
                        APRIL 2026 — PRESENT • APEX RECOGNITION
                      </div>
                      <h4 className="font-display text-lg text-white font-semibold mb-1">
                        Junior Scholar — Sarod (ITC Sangeet Research Academy)
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-[#999999] leading-relaxed">
                        Formal appointment as Junior Scholar in Sarod at ITC Sangeet Research Academy, Kolkata, where Barnik continues his advanced residential training under Shri Abir Hussain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Narrative Prose */}
              <div className="bg-[#0a0a0a] border border-[#222222] p-6 sm:p-8 space-y-4 font-body text-sm text-[#AAAAAA] leading-relaxed">
                <p>
                  Hailing from Kolkata, the cultural epicentre of Indian classical music, <strong className="text-white">Barnik Basu</strong> has emerged as an exceptionally focused and sensitive young exponent of the Sarod. Guided by an innate reverence for sound purity (<em className="text-[#CC0000]">swara shuddhi</em>) and unyielding discipline in daily riyaaz, his musical articulation reflects the profound depth of his classical heritage.
                </p>

                {readMoreExpanded && (
                  <div className="space-y-4 pt-2 border-t border-[#1a1a1a]">
                    <p>
                      Recognizing his uncommon acoustic sensitivity and rigorous discipline, Barnik was accepted in 2018 under the mentorship of Shri Abir Hussain at the esteemed ITC Sangeet Research Academy. Under Shri Abir Hussain's watchful guidance, Barnik's approach underwent a fundamental transformation, expanding into gayaki ang, complex taankari, and the expansive architecture of raga exposition.
                    </p>
                    <p>
                      In 2026, Barnik achieved a landmark milestone by earning selection as a Junior Scholar in Sarod at the ITC Sangeet Research Academy, Kolkata, continuing his advanced training under Shri Abir Hussain.
                    </p>
                    <div className="bg-[#111111] p-4 border border-[#222222]">
                      <div className="font-display text-xs tracking-widest text-[#CC0000] font-bold uppercase mb-1">
                        ACADEMIC FOUNDATION
                      </div>
                      <p className="text-xs text-[#888888]">
                        Parallel to his musical sādhanā, Barnik maintains outstanding scholastic achievement: St. Xavier's Institution (2010–2025) · JEE Main 2025 (97.52 percentile) · Indian Institute of Information Technology, Kalyani (B.Tech in Computer Science & Engineering 2025–2029).
                      </p>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setReadMoreExpanded(!readMoreExpanded)}
                  className="font-display text-xs tracking-widest text-[#CC0000] hover:text-white font-semibold uppercase flex items-center gap-1.5 pt-2 cursor-pointer transition-colors"
                >
                  <span>{readMoreExpanded ? 'READ LESS' : 'READ MORE'}</span>
                  {readMoreExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Right Column: Official Dossier Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#0e0e0e] border border-[#222222] p-6 space-y-6">
                <div className="flex items-center justify-between border-b border-[#222222] pb-4">
                  <div className="font-display text-xs tracking-widest text-white font-bold uppercase">
                    OFFICIAL DOSSIER
                  </div>
                  <span className="bg-[#CC0000] text-white text-[10px] font-display font-semibold tracking-wider px-2 py-0.5">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-4 text-xs font-display tracking-wider">
                  <div>
                    <div className="text-[10px] text-[#666666] uppercase mb-0.5">DISCIPLINE</div>
                    <div className="text-white font-semibold">HINDUSTANI CLASSICAL SAROD</div>
                  </div>

                  <div>
                    <div className="text-[10px] text-[#666666] uppercase mb-0.5">GHARANA / LINEAGE</div>
                    <div className="text-white font-semibold">SENIA SHAHJAHANPUR GHARANA</div>
                  </div>

                  <div>
                    <div className="text-[10px] text-[#666666] uppercase mb-0.5">RESIDENCE & ORIGIN</div>
                    <div className="text-white font-semibold">KOLKATA, WEST BENGAL, INDIA</div>
                  </div>

                  <div>
                    <div className="text-[10px] text-[#666666] uppercase mb-0.5">CURRENT APPOINTMENT</div>
                    <div className="text-[#CC0000] font-semibold">
                      ITC Sangeet Research Academy (Junior Scholar)
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-[#666666] uppercase mb-0.5">PEDAGOGICAL RIYAAZ</div>
                    <div className="text-white font-semibold">14+ Years of Rigorous Sādhanā</div>
                  </div>

                  <div>
                    <div className="text-[10px] text-[#666666] uppercase mb-0.5">CONCERT INSTRUMENT</div>
                    <div className="text-white font-semibold">
                      Teakwood & Chrome 25-String Classical Sarod
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-[#666666] uppercase mb-0.5">ACTIVE STATUS</div>
                    <div className="text-white font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-emerald-500 rounded-none inline-block"></span>
                      <span>ACTIVE CONCERTIST</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#222222]">
                  <div className="text-[10px] font-display tracking-widest text-[#777777] mb-2 uppercase">
                    ACADEMY AFFILIATION
                  </div>
                  <div className="bg-black border border-[#1f1f1f] p-3 text-center">
                    <ShieldCheck className="w-5 h-5 text-[#CC0000] mx-auto mb-1" />
                    <div className="font-display text-xs text-white tracking-widest font-bold">
                      ITC SRA KOLKATA
                    </div>
                    <div className="text-[9px] text-[#888888] tracking-widest uppercase">
                      CERTIFIED SCHOLAR DIRECTORY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: GURUS ================= */}
        {activeTab === 'gurus' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Guru 01 */}
              <div className="bg-[#0a0a0a] border border-[#222222] p-6 sm:p-8 flex flex-col justify-between hover:border-[#CC0000] transition-colors">
                <div>
                  <div className="flex items-center justify-between text-xs font-display tracking-widest mb-4">
                    <span className="text-[#CC0000] font-bold">GURU 01 // FOUNDATION</span>
                    <span className="text-[#888888] font-bold">2012 — 2018</span>
                  </div>

                  {/* Guru Portrait */}
                  <div className="aspect-[4/3] bg-[#141414] border border-[#222222] mb-5 overflow-hidden">
                    <img
                      src={IMAGES.guruDiptesh}
                      alt="Shri Diptesh Bhattacharya"
                      className="w-full h-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-white font-bold tracking-wide mb-1">
                    SHRI DIPTESH BHATTACHARYA
                  </h3>
                  <div className="text-xs font-display text-[#CC0000] tracking-widest uppercase mb-4 font-semibold">
                    Sarod · Foundational Training
                  </div>

                  <div className="font-body text-xs sm:text-sm text-[#AAAAAA] leading-relaxed space-y-3 mb-6">
                    <p>
                      Barnik's journey with the Sarod began at the age of five under the guidance of <strong className="text-white">Shri Diptesh Bhattacharya</strong>. His foundational training established the physical and musical vocabulary upon which his later development was built.
                    </p>
                    <p>
                      He learnt the instrument from the very beginning — the correct way of holding the Sarod and <em className="text-white">jawa</em>, proper hand positioning, stroke control and velocity, <em className="text-white">jowari sadhana</em>, and the discipline of producing a clear and controlled tone.
                    </p>
                    <p>
                      His early training progressed through <strong className="text-white">Sargam, Sargam patterns and paltas</strong>, followed by <em className="text-white">taans</em>, basic raga structures, <em className="text-white">aroha–avaroha</em>, elementary raga theory, <em className="text-white">alap</em>, <em className="text-white">jor</em> and <em className="text-white">jhala</em>. Through this systematic grounding, Barnik developed his first understanding of phrasing, rhythm, articulation and the architecture of Hindustani classical music.
                    </p>
                    <p>
                      This period introduced him to the musical world of the <strong className="text-white">Senia-Maihar tradition</strong> and gave him the foundational discipline required to approach the Sarod not merely as an instrument, but as a medium for musical expression.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#1a1a1a] pt-4">
                  <div className="text-[10px] font-display text-[#CC0000] tracking-widest uppercase font-bold mb-1">
                    PEDAGOGY
                  </div>
                  <div className="text-xs font-display tracking-wider text-white font-semibold leading-relaxed">
                    FOUNDATIONAL SAROD · BOL-BANI · JOWARI SADHANA · RAGA ARCHITECTURE · TECHNICAL DISCIPLINE
                  </div>
                </div>
              </div>

              {/* Guru 02 */}
              <div className="bg-[#0a0a0a] border border-[#222222] p-6 sm:p-8 flex flex-col justify-between hover:border-[#CC0000] transition-colors">
                <div>
                  <div className="flex items-center justify-between text-xs font-display tracking-widest mb-4">
                    <span className="text-[#CC0000] font-bold">GURU 02 // ADVANCED TUTELAGE</span>
                    <span className="text-[#888888] font-bold">2018 — PRESENT</span>
                  </div>

                  {/* Guru Portrait */}
                  <div className="aspect-[4/3] bg-[#141414] border border-[#222222] mb-5 overflow-hidden">
                    <img
                      src={IMAGES.guruAbir}
                      alt="Shri Abir Hussain"
                      className="w-full h-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-white font-bold tracking-wide mb-1">
                    SHRI ABIR HUSSAIN
                  </h3>
                  <div className="text-xs font-display text-[#CC0000] tracking-widest uppercase mb-4 font-semibold">
                    Sarod · ITC Sangeet Research Academy, Kolkata
                  </div>

                  <div className="font-body text-xs sm:text-sm text-[#AAAAAA] leading-relaxed space-y-3 mb-6">
                    <p>
                      Under <strong className="text-white">Shri Abir Hussain</strong>, Barnik's musical journey took a profound turning point. Beginning with private lessons and sessions in 2018, his approach to the Sarod, understanding of music and vision as a musician underwent a fundamental transformation.
                    </p>
                    <p>
                      His training expanded beyond technique into <strong className="text-white">musicality and expression</strong> — particularly the development of <em className="text-white">gayaki ang</em>, nuanced <em className="text-white">meend</em>, <em className="text-white">gamak</em>, phrasing and the ability to make the Sarod sing through its notes.
                    </p>
                    <p>
                      His study progressed deeply across the complete architecture of a raga performance: <strong className="text-white">alap, jor, jhala, vilambit, madhyalay, drut and advanced jhala</strong>, alongside increasingly detailed study of individual ragas and their distinctive grammar, mood and possibilities.
                    </p>
                    <p>
                      Shri Abir Hussain's guidance introduced Barnik more deeply to the musical world of the <strong className="text-white">Senia-Shahjahanpur tradition</strong>, while encouraging a broader understanding of what it means to become a complete musician.
                    </p>
                    <p>
                      The training has brought a new vision, approach and perspective to Barnik's musical pursuit — transforming not only his playing, but also his understanding of musicality, expression, discipline and the relationship between technique and emotion.
                    </p>
                    <p>
                      In 2026, Barnik was selected as a <strong className="text-white">Junior Scholar in Sarod at ITC Sangeet Research Academy, Kolkata</strong>, where he continues his advanced training under Shri Abir Hussain.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#1a1a1a] pt-4">
                  <div className="text-[10px] font-display text-[#CC0000] tracking-widest uppercase font-bold mb-1">
                    PEDAGOGY
                  </div>
                  <div className="text-xs font-display tracking-wider text-white font-semibold leading-relaxed">
                    GAYAKI ANG · MEEND · GAMAK · RAGA VISTAR · ADVANCED TAANKARI · ALAAP · JOR · JHALA · VILAMBIT · MADHYALAY · DRUT · MUSICALITY
                  </div>
                </div>
              </div>
            </div>

            {/* The Guru-Shishya Journey Monograph */}
            <div className="bg-[#0c0c0c] border border-[#222222] border-l-4 border-l-[#CC0000] p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-[#CC0000]" />
                <span className="text-xs font-display tracking-widest text-[#888888] uppercase">
                  PARAMPARA // FOUNDATION & TRANSFORMATION
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase mb-4">
                THE GURU-SHISHYA JOURNEY
              </h3>

              <div className="font-body text-xs sm:text-sm text-[#AAAAAA] leading-relaxed space-y-4">
                <p>
                  From the first lessons of holding the Sarod and <em className="text-white">jawa</em> correctly to the pursuit of musical expression through <em className="text-white">gayaki ang</em>, <em className="text-white">meend</em>, <em className="text-white">gamak</em> and detailed raga development, Barnik's musical journey has been shaped profoundly by his two Gurus.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-black border border-[#1f1f1f] p-4">
                    <div className="font-display text-xs text-[#CC0000] font-bold tracking-wider uppercase mb-1">
                      THE FOUNDATION
                    </div>
                    <p className="text-xs text-[#CCCCCC] leading-relaxed">
                      <strong className="text-white">Shri Diptesh Bhattacharya</strong> gave him the foundation — the physical discipline, technical vocabulary and architectural understanding from which his Sarod playing could grow.
                    </p>
                  </div>

                  <div className="bg-black border border-[#1f1f1f] p-4">
                    <div className="font-display text-xs text-[#CC0000] font-bold tracking-wider uppercase mb-1">
                      THE MUSICAL VISION
                    </div>
                    <p className="text-xs text-[#CCCCCC] leading-relaxed">
                      <strong className="text-white">Shri Abir Hussain</strong> transformed that foundation into a broader musical vision, deepening his understanding of raga, expression, phrasing and the pursuit of complete musicianship.
                    </p>
                  </div>
                </div>

                <p className="pt-2 text-white font-medium border-t border-[#1c1c1c]">
                  Barnik remains deeply grateful to both his Gurus and considers himself fortunate to have received their guidance. His humble <em className="text-[#CC0000]">pranams</em> remain with them as he continues his journey through music.
                </p>
              </div>
            </div>

            {/* ITC SRA Comprehensive Chronicle */}
            <div className="bg-[#0a0a0a] border border-[#222222] p-6 sm:p-10 space-y-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-[#1f1f1f] pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 bg-[#CC0000]" />
                    <span className="text-xs font-display tracking-widest text-[#CC0000] uppercase font-bold">
                      INSTITUTIONAL HERITAGE // EST. 1977 · KOLKATA
                    </span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl text-white font-bold tracking-wide uppercase mb-1">
                    ITC SANGEET RESEARCH ACADEMY
                  </h3>
                  <div className="font-display text-sm text-[#CCCCCC] tracking-widest uppercase font-semibold">
                    JUNIOR SCHOLAR · SAROD · 2026–PRESENT
                  </div>
                </div>

                <div className="bg-black border border-[#262626] p-4 text-center shrink-0 w-full md:w-56">
                  <div className="font-display text-xl font-bold text-white mb-0.5">ITC SRA</div>
                  <div className="text-[10px] font-display text-[#CC0000] tracking-widest uppercase font-semibold mb-1">
                    KOLKATA
                  </div>
                  <div className="text-[10px] text-[#777777] border-t border-[#1f1f1f] pt-1.5 uppercase tracking-wider">
                    GURU-SHISHYA PARAMPARA
                  </div>
                </div>
              </div>

              {/* Overview Narrative */}
              <p className="font-body text-xs sm:text-sm text-[#CCCCCC] leading-relaxed max-w-4xl">
                Barnik’s selection as a Junior Scholar at the ITC Sangeet Research Academy, Kolkata, followed a rigorous three-stage audition process, progressing from an online recital submission to live evaluation before the Academy’s Musician Tutors and, ultimately, its Gurus.
              </p>

              {/* Three-Stage Audition Process Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stage 01 */}
                <div className="bg-black border border-[#1f1f1f] p-5 hover:border-[#CC0000] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-display text-[#CC0000] tracking-widest font-bold uppercase mb-2">
                      STAGE 01
                    </div>
                    <h4 className="font-display text-base text-white font-bold tracking-wide uppercase mb-2">
                      01 — ONLINE AUDITION
                    </h4>
                    <p className="font-body text-xs text-[#999999] leading-relaxed">
                      The journey began with the submission of a recorded short Sarod recital in a Raga. Among numerous applicants, the recording was evaluated as the first stage of the Academy’s selection process.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#161616] text-[10px] font-display text-[#666666] tracking-wider uppercase">
                    EVALUATION: RECORDED RAGA RECITAL
                  </div>
                </div>

                {/* Stage 02 */}
                <div className="bg-black border border-[#1f1f1f] p-5 hover:border-[#CC0000] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-display text-[#CC0000] tracking-widest font-bold uppercase mb-2">
                      STAGE 02
                    </div>
                    <h4 className="font-display text-base text-white font-bold tracking-wide uppercase mb-2">
                      02 — LIVE AUDITION · MUSICIAN TUTORS
                    </h4>
                    <p className="font-body text-xs text-[#999999] leading-relaxed">
                      Following the initial selection, Barnik appeared for the second stage of the audition in person at ITC SRA. He performed live before the Academy’s Musician Tutors, who evaluated his playing as part of the rigorous selection process.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#161616] text-[10px] font-display text-[#666666] tracking-wider uppercase">
                    IN-PERSON LIVE JURY EVALUATION
                  </div>
                </div>

                {/* Stage 03 */}
                <div className="bg-black border border-[#1f1f1f] p-5 hover:border-[#CC0000] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-display text-[#CC0000] tracking-widest font-bold uppercase mb-2">
                      STAGE 03
                    </div>
                    <h4 className="font-display text-base text-white font-bold tracking-wide uppercase mb-2">
                      03 — FINAL AUDITION · GURUS OF ITC SRA
                    </h4>
                    <p className="font-body text-xs text-[#999999] leading-relaxed">
                      Having progressed through the second stage, Barnik performed in the final offline round before the distinguished Gurus of ITC SRA. The live recital was followed by an interview with the Gurus as the concluding stage of the selection process.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#161616] text-[10px] font-display text-[#666666] tracking-wider uppercase">
                    FINAL RECITAL & GURU INTERVIEW
                  </div>
                </div>
              </div>

              {/* Outcome: Selected 2026 & Before the Maestros */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Selected 2026 Card */}
                <div className="lg:col-span-7 bg-[#0f0f0f] border border-[#222222] border-l-4 border-l-[#CC0000] p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="bg-[#CC0000] text-white text-[10px] font-display tracking-widest px-2.5 py-0.5 font-bold uppercase">
                        LANDMARK MILESTONE
                      </span>
                      <span className="font-display text-xs text-[#AAAAAA] tracking-widest">
                        ITC SRA KOLKATA
                      </span>
                    </div>

                    <h4 className="font-display text-xl sm:text-2xl text-white font-bold uppercase tracking-wide mb-3">
                      SELECTED · 2026
                    </h4>

                    <div className="font-body text-xs sm:text-sm text-[#AAAAAA] leading-relaxed space-y-3">
                      <p>
                        After progressing through all three stages and the final interview, Barnik was selected as a <strong className="text-white">Junior Scholar in Sarod at the ITC Sangeet Research Academy in 2026</strong>.
                      </p>
                      <p>
                        The selection marked a significant milestone in his musical journey, bringing his years of training into the Guru-Shishya tradition of one of India’s foremost institutions for Hindustani classical music. He continues his taleem at the Academy under his Guru, <strong className="text-white">Shri Abir Hussain</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1f1f1f] text-[11px] font-display text-[#CC0000] tracking-wider uppercase font-semibold">
                    RESIDENTIAL JUNIOR SCHOLAR · SAROD (2026–PRESENT)
                  </div>
                </div>

                {/* Before the Maestros */}
                <div className="lg:col-span-5 bg-black border border-[#222222] p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-display text-[#CC0000] tracking-widest uppercase font-bold mb-2">
                      RECITAL APPRECIATION
                    </div>
                    <h4 className="font-display text-xl sm:text-2xl text-white font-bold uppercase tracking-wide mb-3">
                      BEFORE THE MAESTROS
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-[#AAAAAA] leading-relaxed mb-4">
                      Barnik’s live performances before the Academy’s Musician Tutors and Gurus were received with appreciation, culminating in his selection as a Junior Scholar.
                    </p>
                    <blockquote className="border-l-2 border-[#CC0000] pl-3 font-display text-xs sm:text-sm text-white tracking-wider uppercase leading-snug">
                      &ldquo;From an initial recorded recital to performing before the maestros — three stages, a final interview, and a place within the Academy’s tradition of taleem.&rdquo;
                    </blockquote>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1a1a1a] text-[10px] font-display text-[#666666] tracking-wider uppercase">
                    TRADITION OF TALEEM · LIVING RESIDENTIAL GURUKUL
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: PERFORMANCES ================= */}
        {activeTab === 'performances' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#222222] pb-3">
              <div className="font-display text-xs tracking-widest text-[#AAAAAA] uppercase">
                STAGE CHRONICLE & RECITAL ARCHIVE [2019 — 2025]
              </div>
              <div className="text-[11px] font-display tracking-widest text-[#CC0000]">
                8 VERIFIED ARCHIVES
              </div>
            </div>

            {/* Performance Ledger Table */}
            <div className="border border-[#222222] bg-[#0a0a0a] overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#222222] bg-[#111111] text-[10px] font-display tracking-widest text-[#888888] uppercase">
                    <th className="py-3 px-4 sm:px-6">YEAR</th>
                    <th className="py-3 px-4 sm:px-6">PROGRAMME & VENUE</th>
                    <th className="py-3 px-4 sm:px-6">LOCATION</th>
                    <th className="py-3 px-4 sm:px-6 text-right">DISTINCTION / ROLE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1a1a1a] text-xs font-display tracking-wider">
                  {/* Row 1 */}
                  <tr className="hover:bg-[#121212] transition-colors">
                    <td className="py-4 px-4 sm:px-6 text-white font-bold">2025</td>
                    <td className="py-4 px-4 sm:px-6">
                      <div className="text-white font-semibold">VIBE IN SAAVAN</div>
                      <div className="text-[10px] text-[#777777] font-body">
                        Indian Institute of Technology Madras (IIT Madras)
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#AAAAAA]">Chennai</td>
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <span className="bg-[#CC0000] text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider inline-block">
                        WINNER — INSTRUMENTALS CATEGORY
                      </span>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-[#121212] transition-colors">
                    <td className="py-4 px-4 sm:px-6 text-white font-bold">2025</td>
                    <td className="py-4 px-4 sm:px-6">
                      <div className="text-white font-semibold">MAJLISH</div>
                      <div className="text-[10px] text-[#777777] font-body">Classical Baithak Recital</div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#AAAAAA]">Dumdum, Kolkata</td>
                    <td className="py-4 px-4 sm:px-6 text-right text-[#888888] uppercase">SOLO RECITAL</td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-[#121212] transition-colors">
                    <td className="py-4 px-4 sm:px-6 text-white font-bold">2025</td>
                    <td className="py-4 px-4 sm:px-6">
                      <div className="text-white font-semibold">ANUKRITI</div>
                      <div className="text-[10px] text-[#777777] font-body">
                        Indian Institute of Information Technology Kalyani
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#AAAAAA]">Kalyani, Nadia</td>
                    <td className="py-4 px-4 sm:px-6 text-right text-[#888888] uppercase">STAGE RECITAL</td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-[#121212] transition-colors">
                    <td className="py-4 px-4 sm:px-6 text-white font-bold">2025</td>
                    <td className="py-4 px-4 sm:px-6">
                      <div className="text-white font-semibold">INDIAN CLASSICAL VOCAL & INSTRUMENTS FESTIVAL</div>
                      <div className="text-[10px] text-[#777777] font-body">
                        Belghoria Ranipark Cultural Centre
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#AAAAAA]">Belghoria, Kolkata</td>
                    <td className="py-4 px-4 sm:px-6 text-right text-[#888888] uppercase">FESTIVAL RECITAL</td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="hover:bg-[#121212] transition-colors">
                    <td className="py-4 px-4 sm:px-6 text-white font-bold">2024</td>
                    <td className="py-4 px-4 sm:px-6">
                      <div className="text-white font-semibold">PANCHAMI</div>
                      <div className="text-[10px] text-[#777777] font-body">Dasgupta House, Belgharia</div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#AAAAAA]">Belgharia, Kolkata</td>
                    <td className="py-4 px-4 sm:px-6 text-right text-[#888888] uppercase">BAITHAK RECITAL</td>
                  </tr>

                  {/* Row 6 */}
                  <tr className="hover:bg-[#121212] transition-colors">
                    <td className="py-4 px-4 sm:px-6 text-white font-bold">2023</td>
                    <td className="py-4 px-4 sm:px-6">
                      <div className="text-white font-semibold">POUSH UTSAV</div>
                      <div className="text-[10px] text-[#777777] font-body">New Basudebpur Adhibasi Brindo</div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#AAAAAA]">Belghoria, Kolkata</td>
                    <td className="py-4 px-4 sm:px-6 text-right text-[#888888] uppercase">ANNUAL UTSAV</td>
                  </tr>

                  {/* Row 7 */}
                  <tr className="hover:bg-[#121212] transition-colors">
                    <td className="py-4 px-4 sm:px-6 text-white font-bold">2022</td>
                    <td className="py-4 px-4 sm:px-6">
                      <div className="text-white font-semibold">POUSH UTSAV</div>
                      <div className="text-[10px] text-[#777777] font-body">New Basudebpur Adhibasi Brindo</div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#AAAAAA]">Belghoria, Kolkata</td>
                    <td className="py-4 px-4 sm:px-6 text-right text-[#888888] uppercase">ANNUAL UTSAV</td>
                  </tr>

                  {/* Row 8 */}
                  <tr className="hover:bg-[#121212] transition-colors">
                    <td className="py-4 px-4 sm:px-6 text-white font-bold">2019</td>
                    <td className="py-4 px-4 sm:px-6">
                      <div className="text-white font-semibold">XAVI CARNIVAL</div>
                      <div className="text-[10px] text-[#777777] font-body">
                        St. Xavier's Institution, Panihati
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#AAAAAA]">Panihati, North 24 Parganas</td>
                    <td className="py-4 px-4 sm:px-6 text-right text-[#888888] uppercase">YOUTH SPOTLIGHT</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Archival Note */}
            <div className="text-center py-4 border-t border-[#1a1a1a]">
              <span className="font-display text-xs tracking-widest text-[#777777] uppercase">
                AND SEVERAL OTHER LOCAL CLASSICAL MUSIC PROGRAMMES & SABHA RECITALS
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
