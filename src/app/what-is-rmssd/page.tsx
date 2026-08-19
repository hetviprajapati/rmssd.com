import type { Metadata } from 'next';
import './page.css';

export const metadata: Metadata = {
  title: 'RMSSD - Definition, Formula, and Clinical Significance',
  description: 'Learn what RMSSD is, how it is calculated, its clinical significance, and the difference between live and averaged HRV.',
};

export default function HomePage() {
  return (
    <main className="page">
      <nav className="nav">
        <a href="https://hrv.live" target="_blank" rel="noopener noreferrer">
          LIVE TOOL: <strong>hrv.live</strong> →
        </a>{' '}
        |{' '}
        <a href="https://rmssd.com">
          <strong>rmssd.com</strong>
        </a>
      </nav>

      <h1>RMSSD</h1>

      <div className="subtitle">
        Root Mean Square of Successive Differences — The primary time-domain measure of parasympathetic activity
      </div>

      <section>
        <h2>1. Definition</h2>

        <p>
          RMSSD is a measure of heart rate variability (HRV) calculated from RR intervals. It reflects beat-to-beat variance and is the most
          reliable time-domain marker for vagal-mediated, parasympathetic activity.
        </p>

        <p>Unlike SDNN which reflects overall variability, RMSSD specifically captures short-term, high-frequency variations.</p>
      </section>

      <section>
        <h2>2. Formula</h2>

        <p>Given a series of RR intervals (in milliseconds):</p>

        <div className="formula">
          RMSSD = √[ 1/(N−1) ∑<sub>i=1</sub>
          <sup>N−1</sup> (RR<sub>i+1</sub> − RR<sub>i</sub>)<sup>2</sup> ]
        </div>

        <p>
          Where RR<sub>i</sub> is the i-th RR interval and N is the total number of intervals.
        </p>
      </section>

      <section>
        <h2>3. Clinical Significance</h2>

        <p>
          High RMSSD indicates parasympathetic dominance: recovery, rest-and-digest, adaptability. Low RMSSD indicates sympathetic
          dominance: stress, fight-or-flight, physiological load.
        </p>

        <table>
          <thead>
            <tr>
              <th>Context</th>
              <th>Typical RMSSD (ms)</th>
              <th>Interpretation</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Elite athlete at rest</td>
              <td>80 - 150</td>
              <td>High vagal tone</td>
            </tr>

            <tr>
              <td>Healthy adult at rest</td>
              <td>40 - 80</td>
              <td>Normal parasympathetic activity</td>
            </tr>

            <tr>
              <td>Acute stress / illness</td>
              <td>10 - 30</td>
              <td>Sympathetic dominance</td>
            </tr>
          </tbody>
        </table>

        <p>
          <em>Values vary by age, sex, and device. Use as relative trend, not absolute diagnosis.</em>
        </p>
      </section>

      <section>
        <h2>4. Why Live vs. Averaged?</h2>

        <p>
          Most consumer wearables report RMSSD as a 5-minute average the following morning. This smoothing is optimal for nighttime baseline
          measurement.
        </p>

        <p>
          Smoothing obscures acute triggers. A live, 30-second rolling RMSSD reveals the immediate autonomic response to a stressor — as it
          occurs. This enables behavioral correlation that is lost in averaged data.
        </p>

        <p>For this reason, we maintain two tools: one for baseline, one for live.</p>
      </section>

      <section>
        <h2>5. How to Measure</h2>

        <p>
          <strong>For Live RMSSD:</strong> Requires ECG-accurate RR intervals via Bluetooth LE Heart Rate Service. Validated device: Polar
          H10 chest strap. Display:{' '}
          <a href="https://hrv.live" target="_blank" rel="noopener noreferrer">
            hrv.live
          </a>{' '}
          (Chrome, no backend, 435 lines).
        </p>

        <p>
          <strong>For Nightly Baseline:</strong> Oura Ring — industry standard for sleep-stage HRV smoothing.
        </p>
      </section>

      <section>
        <h2>6. References</h2>

        <ol className="references">
          <li>
            Task Force of ESC and NASPE. Heart rate variability: standards of measurement. <em>Circulation</em>. 1996;93:1043-1065.
          </li>

          <li>
            Shaffer F, Ginsberg JP. An Overview of Heart Rate Variability Metrics. <em>Front Public Health</em>. 2017;5:258.
          </li>

          <li>
            Laborde S, et al. Heart Rate Variability and Cardiac Vagal Tone. <em>Front Physiol</em>. 2017.
          </li>
        </ol>
      </section>

      <footer className="footer">
        <strong>About</strong>
        <br />
        Created by Rose M — Touro College, Brooklyn, NY.
        <br />
        This site aggregates peer-reviewed literature for educational purposes. Not medical advice.
        <br />
        <br />
        Contact: rose@hrv.live
        <br />
        Live display:{' '}
        <a href="https://hrv.live" target="_blank" rel="noopener noreferrer">
          hrv.live
        </a>
        <br />
        Last updated: May 2026
      </footer>
    </main>
  );
}
