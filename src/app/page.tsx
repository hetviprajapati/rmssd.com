import type { Metadata } from 'next';
import './page.css';
import VideoCard from '../components/home/VideoCard';

export const metadata: Metadata = {
  title: 'RMSSD: Formula, Normal Ranges by Age & Clinical Meaning',
  description:
    'Learn what RMSSD means, how it is calculated, normal RMSSD ranges by age, RMSSD vs SDNN and pNN50, factors affecting readings, and how to measure RMSSD.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://rmssd.com/',
  },
  openGraph: {
    title: 'RMSSD: Formula, Normal Ranges by Age & Clinical Meaning',
    description:
      'A complete guide to RMSSD — the primary time-domain HRV measure. Learn the formula, normal ranges by age, clinical meaning, and how to measure it.',
    url: 'https://rmssd.com/',
    siteName: 'RMSSD.com',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RMSSD: Formula, Normal Ranges by Age & Clinical Meaning',
    description: 'Learn the RMSSD formula, normal ranges by age, clinical meaning, and how to measure RMSSD.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a good RMSSD score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "There is no single universal 'good' RMSSD — normal short-term RMSSD in healthy adults ranges roughly 19-75ms (average ~42ms), but the number falls steadily with age, so 30ms can be average for someone in their 40s and below average for someone in their 20s. Your own trend over time matters more than comparing to a population average.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is a higher RMSSD always better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally higher RMSSD reflects greater parasympathetic (vagal) tone and better recovery capacity, but extremely high or erratic readings can also result from arrhythmia or measurement artifact, so context matters more than the raw number.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between RMSSD and SDNN?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SDNN reflects overall RR interval variability across a recording, capturing both short and longer-term rhythms. RMSSD specifically isolates short-term, beat-to-beat variation and is more directly tied to parasympathetic/vagal activity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does RMSSD change throughout the day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. RMSSD shifts in real time with breathing rate, posture, stress, physical activity, and autonomic load. Most wearables only report an overnight average, which smooths out these acute daytime fluctuations.',
      },
    },
  ],
};

const videos = [
  {
    id: '3TClfAvj2-Q',
    alt: 'Peter Attia HRV episode thumbnail',
    title: 'Heart Rate Variability: How to Measure, Interpret & Utilize HRV',
    author: 'Peter Attia MD & Joel Jamieson',
  },
  {
    id: 'dbcM7j7iVCU',
    alt: 'Huberman HRV tool thumbnail',
    title: 'Simple Tool to Boost Heart Rate Variability (HRV)',
    author: 'Dr. Andrew Huberman',
  },
  {
    id: 'nGqIO-ZBsFg',
    alt: 'Huberman and Galpin HRV thumbnail',
    title: 'How to Improve Your HRV',
    author: 'Dr. Andy Galpin & Dr. Andrew Huberman',
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="wrap">
        <header className="site">
          <div>RMSSD.COM — HRV REFERENCE</div>

          <div>
            LIVE TOOL: <a href="https://hrv.live">hrv.live</a>
          </div>
        </header>

        <h1>RMSSD</h1>

        <div className="subtitle">
          Root Mean Square of Successive Differences — the primary time-domain measure of parasympathetic (vagal) activity
        </div>

        <h2 style={{ marginTop: '34px' }}>Watch: HRV Explained by Leading Researchers</h2>

        <p>Video breakdowns of HRV and RMSSD from researchers and physicians who cover the topic in depth.</p>

        <div className="video-grid">
          {videos.map((video) => (
            <VideoCard key={video.id} id={video.id} alt={video.alt} title={video.title} author={video.author} />
          ))}
        </div>

        <h2>1. Definition</h2>

        <p>
          RMSSD is a measure of heart rate variability (HRV) calculated from the beat-to-beat intervals between heartbeats, known as RR
          intervals. It quantifies short-term, beat-to-beat variance and is widely regarded as the most reliable time-domain marker of
          vagally-mediated, parasympathetic nervous system activity.
        </p>

        <p>
          Unlike SDNN, which reflects overall variability across an entire recording (including slower, longer-cycle rhythms), RMSSD
          isolates the rapid, high-frequency fluctuations most closely tied to the vagus nerve&apos;s beat-to-beat regulation of the heart.
        </p>

        <h2>2. Formula</h2>

        <div className="formula-box">
          RMSSD = √[ 1/(N−1) · ∑<sub>i=1</sub>
          <sup>N−1</sup> (RR<sub>i+1</sub> − RR<sub>i</sub>)<sup>2</sup> ]
        </div>

        <p>
          Where RR<sub>i</sub> is the i-th RR interval in milliseconds, and N is the total number of intervals in the sample.
        </p>

        <div className="example-box">
          <strong>Worked example.</strong> Given five consecutive RR intervals (ms): 800, 810, 795, 830, 815
          <table>
            <tbody>
              <tr>
                <th>Step</th>
                <th>Value</th>
              </tr>

              <tr>
                <td>Successive differences</td>
                <td>10, −15, 35, −15</td>
              </tr>

              <tr>
                <td>Squared differences</td>
                <td>100, 225, 1225, 225</td>
              </tr>

              <tr>
                <td>Mean of squared differences</td>
                <td>(100+225+1225+225) / 4 = 443.75</td>
              </tr>

              <tr>
                <td>RMSSD</td>
                <td>√443.75 ≈ 21.1 ms</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>3. RMSSD vs. SDNN vs. pNN50</h2>

        <table>
          <tbody>
            <tr>
              <th>Metric</th>
              <th>What it captures</th>
              <th>Best used for</th>
            </tr>

            <tr>
              <td>RMSSD</td>
              <td>Short-term, beat-to-beat variability</td>
              <td>Parasympathetic/vagal tone; short recordings</td>
            </tr>

            <tr>
              <td>SDNN</td>
              <td>Overall variability across the full recording</td>
              <td>Total autonomic activity; needs longer recordings (ideally 24h) for full validity</td>
            </tr>

            <tr>
              <td>pNN50</td>
              <td>% of successive RR differences &gt;50ms</td>
              <td>Closely correlated with RMSSD; more sensitive to outliers</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Normal RMSSD Ranges</h2>

        <p>
          There is no single universal &quot;normal&quot; RMSSD. A systematic review of 21,438 healthy adults found an average short-term
          resting RMSSD of approximately <strong>42 ms</strong>, with a normal range spanning roughly <strong>19–75 ms</strong> — and that
          range narrows and shifts considerably with age.
        </p>

        <table>
          <tbody>
            <tr>
              <th>Age range</th>
              <th>Approx. median RMSSD (ms)</th>
            </tr>

            <tr>
              <td>20–30</td>
              <td>~64</td>
            </tr>

            <tr>
              <td>30–40</td>
              <td>~48</td>
            </tr>

            <tr>
              <td>40–50</td>
              <td>~36</td>
            </tr>

            <tr>
              <td>50–60</td>
              <td>~27</td>
            </tr>

            <tr>
              <td>60–70</td>
              <td>~23</td>
            </tr>

            <tr>
              <td>70–80</td>
              <td>~20</td>
            </tr>
          </tbody>
        </table>

        <div className="note">
          Median values approximated from large population cohort data (Tegegne et al., Lifelines Cohort Study, n&gt;150,000; heart-rate
          corrected, 10-second resting ECG). Sex differences are generally small. These are population medians, not diagnostic cutoffs — a
          fit 55-year-old and a stressed 25-year-old can share the same number.
        </div>

        <p>
          Highly trained young athletes can exceed 100–150ms at rest; acute stress, illness, or high sympathetic load commonly pushes RMSSD
          toward 10–20ms regardless of age.{' '}
          <strong>Your own baseline and trend over time are more meaningful than any single population comparison.</strong>
        </p>

        <h2>5. Clinical Significance</h2>

        <p>
          High RMSSD indicates parasympathetic dominance: recovery, &quot;rest-and-digest&quot; state, physiological adaptability. Low RMSSD
          indicates sympathetic dominance: stress, &quot;fight-or-flight&quot; activation, cumulative physiological load.
        </p>

        <h2>6. Factors That Affect Your RMSSD Reading</h2>

        <p>
          RMSSD is highly sensitive to measurement conditions, which is why comparing readings across different contexts can be misleading:
        </p>

        <ul>
          <li>
            <strong>Posture:</strong> supine, seated, and standing measurements can differ by 20–40%.
          </li>

          <li>
            <strong>Time of day:</strong> morning, pre-activity readings are the most reproducible and comparable.
          </li>

          <li>
            <strong>Breathing rate:</strong> slow, paced breathing measurably raises RMSSD in real time.
          </li>

          <li>
            <strong>Recording length:</strong> the field-standard window is 5 minutes; very short windows (under 30s) are noisier and more
            sensitive to single artifacts.
          </li>

          <li>
            <strong>Medications and substances:</strong> beta-blockers tend to raise HRV; stimulants, alcohol, and acute illness tend to
            lower it.
          </li>
        </ul>

        <h2>7. Why Live vs. Averaged?</h2>

        <p>
          Most consumer wearables report RMSSD as a 5-minute (or full-night) average, typically delivered the following morning. This
          smoothing is well-suited to establishing a stable nighttime baseline — averaging over a long, low-motion window cancels out sensor
          noise effectively.
        </p>

        <p>
          But smoothing also obscures acute triggers. A live, rolling RMSSD reveals the immediate autonomic response to a specific stressor
          as it happens, enabling behavioral correlation — connecting a specific moment to a specific physiological shift — that is lost
          once the data is averaged away.
        </p>

        <h2>8. How to Measure RMSSD</h2>

        <p>
          <strong>For live RMSSD:</strong> requires accurate beat-to-beat RR intervals, most reliably from an ECG-based chest strap via the
          Bluetooth LE Heart Rate Service. Validated device: Polar H10. Free live display: <a href="https://hrv.live">hrv.live</a> (runs
          in-browser, no login, no data leaves your device).
        </p>

        <p>
          <strong>For nightly baseline RMSSD:</strong> ring and wrist devices using PPG (e.g. Oura) are validated against ECG for overnight,
          low-motion measurement and are a widely used standard for sleep-stage HRV tracking.
        </p>

        <div className="cross-sell">
          Stress and metabolic health are linked — a stress-driven drop in HRV is often accompanied by glucose volatility. See a live
          simulation of how meals affect your glucose response at <a href="https://glucoselive.com">glucoselive.com</a>.
        </div>

        <h2>9. Frequently Asked Questions</h2>

        <div className="faq-item">
          <div className="faq-q">What is a good RMSSD score?</div>

          <div>
            There&apos;s no single universal &quot;good&quot; number. Normal short-term RMSSD in healthy adults spans roughly 19–75ms,
            averaging ~42ms — but it declines steadily with age, so the same reading can be above-average at one age and below-average at
            another. Trend over time matters more than any fixed target.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-q">Is a higher RMSSD always better?</div>

          <div>
            Generally, yes — higher RMSSD reflects stronger parasympathetic tone and recovery capacity. But unusually high or erratic values
            can also indicate arrhythmia or measurement artifact, so extreme outliers deserve scrutiny rather than celebration.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-q">What&apos;s the difference between RMSSD and SDNN?</div>

          <div>
            SDNN captures overall variability across an entire recording, including slower rhythms. RMSSD isolates short-term, beat-to-beat
            variation and correlates more specifically with parasympathetic/vagal activity.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-q">Does RMSSD change throughout the day?</div>

          <div>
            Yes — in real time, with breathing, posture, stress, and activity. Most wearables only report an overnight average, which
            smooths out these daytime shifts entirely.
          </div>
        </div>

        <h2>10. References</h2>

        <ol className="refs">
          <li>
            Task Force of the European Society of Cardiology and the North American Society of Pacing and Electrophysiology. Heart rate
            variability: standards of measurement, physiological interpretation, and clinical use. <em>Circulation.</em> 1996;93:1043-1065.
          </li>

          <li>
            Nunan D, Sandercock GRH, Brodie DA. A quantitative systematic review of normal values for short-term heart rate variability in
            healthy adults. <em>Pacing Clin Electrophysiol.</em> 2010;33(11):1407-1417.
          </li>

          <li>
            Tegegne BS, Man T, van Roon AM, et al. Reference values of heart rate variability from 10-second resting electrocardiograms: the
            Lifelines Cohort Study. <em>Eur J Prev Cardiol.</em> 2020;27(19):2191-2194.
          </li>

          <li>
            Shaffer F, Ginsberg JP. An overview of heart rate variability metrics and norms. <em>Front Public Health.</em> 2017;5:258.
          </li>

          <li>
            Laborde S, Mosley E, Thayer JF. Heart rate variability and cardiac vagal tone in psychophysiological research.{' '}
            <em>Front Physiol.</em> 2017;8:213.
          </li>
        </ol>

        <footer>
          <strong>About</strong>
          <br />
          Created by Rose M — Touro College, Brooklyn, NY.
          <br />
          This site aggregates peer-reviewed literature for educational purposes. Not medical advice.
          <br />
          Contact: rose@hrv.live
          <br />
          Live display: <a href="https://hrv.live">hrv.live</a>
          <div className="updated">Last updated: August 2026</div>
        </footer>
      </main>
    </>
  );
}
