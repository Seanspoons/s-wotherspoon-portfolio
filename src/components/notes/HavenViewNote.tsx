// src/components/notes/HavenViewNote.tsx
export default function HavenViewNote() {
  return (
    <div className="space-y-6 text-sm text-slate-700">
      {/* Intro */}
      <section className="space-y-2">
        <p>
          HavenView is a self-hosted home security hub running on a Raspberry Pi 5
          in my house. It ingests RTSP streams from Reolink cameras, exposes a
          low-latency WebRTC live view, and records motion events to an external SSD
          via a FastAPI backend and a React frontend.
        </p>
        <p>
          The goal was to give my family a camera system that we control end to end:
          local-first recording on hardware we own, predictable storage, and a UI
          that keeps the focus on live video and meaningful motion events instead of
          a constant firehose.
        </p>
        <p className="text-xs text-slate-500">
          Stack: FastAPI • React • WebRTC • go2rtc • PostgreSQL • Redis • Docker •
          Raspberry&nbsp;Pi&nbsp;5 • Supabase Auth • Cloudflare Tunnel • Coturn
        </p>
      </section>

      {/* System-level architecture */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-primary">
          System architecture
        </h2>
        <p>
          At a high level, HavenView is a small distributed system: a PWA front-end,
          a Pi hub on the home LAN, and a minimal set of cloud services used for
          auth, tunnelling, and WebRTC relay when clients are off-network.
        </p>

        <figure className="space-y-2">
          <div className="overflow-hidden rounded-xl bg-surface ring-1 ring-primary/5">
            <img
              src="/notes/havenview-architecture-v1.png"
              alt="HavenView system architecture diagram showing clients, Cloudflare, Supabase, TURN, and the home LAN hub."
              className="w-full"
            />
          </div>
          <figcaption className="text-xs text-slate-500">
            HavenView system architecture — Supabase for authentication, Cloudflare
            Pages for the PWA, Cloudflare Tunnel into the Pi 5, and a coturn VPS for
            WebRTC relay when clients are outside the LAN.
          </figcaption>
        </figure>
      </section>

      {/* Pi / Hub internals */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-primary">
          HavenView Hub internals
        </h2>
        <p>
          Inside the Pi, everything runs in Docker: a FastAPI backend, go2rtc for
          RTSP ingest and WebRTC relay, PostgreSQL for metadata, Redis for pub/sub,
          and supporting agents that manage motion events, recording segments, and
          health checks.
        </p>

        <figure className="space-y-2">
          <div className="overflow-hidden rounded-xl bg-surface ring-1 ring-primary/5">
            <img
              src="/notes/havenview-hub-raspberry-pi-5-architecture-v1.png"
              alt="HavenView Raspberry Pi 5 internal architecture diagram showing Docker services, go2rtc, PostgreSQL, Redis, and storage."
              className="w-full"
            />
          </div>
          <figcaption className="text-xs text-slate-500">
            Internal architecture of the HavenView hub — Docker services on the Pi 5
            talk over the local network to Reolink cameras and write recordings and
            metadata to a Samsung T7 SSD.
          </figcaption>
        </figure>
      </section>

      {/* Why */}
      <section className="space-y-2">
        <h2 className="text-sm font-semibold text-primary">
          Why I built it
        </h2>
        <p>
          I didn&apos;t want a black-box cloud NVR where storage limits, retention,
          or access patterns could change under us. HavenView keeps the critical
          pieces in the house: the Pi, the SSD, and the camera streams. Cloud
          services are only used for sign-in and securely reaching the hub when
          we&apos;re away.
        </p>
        <p>
          It&apos;s also a place to experiment with real-time pipelines (WebRTC,
          Redis pub/sub) and product decisions: what belongs on the main dashboard,
          how retention should work, and how much complexity to hide so it stays
          usable for non-technical family members.
        </p>
      </section>

      {/* Capabilities / UX */}
      <section className="space-y-2">
        <h2 className="text-sm font-semibold text-primary">
          Core capabilities in v1
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="font-medium">Live view.</span> WebRTC live view for
            multiple cameras with a focus on low-latency streaming.
          </li>
          <li>
            <span className="font-medium">Motion events.</span> Motion-driven
            recording with event thumbnails and a timeline so you can jump to what
            actually happened instead of scrubbing hours of footage.
          </li>
          <li>
            <span className="font-medium">Retention & saving.</span> Motion clips
            live on disk with a 14-day default retention window; anything you
            explicitly save is exempt from cleanup so important events don&apos;t
            disappear.
          </li>
          <li>
            <span className="font-medium">Health & status.</span> Surface-level
            system status for the Pi, disk, and camera connectivity so it&apos;s
            obvious when something needs attention.
          </li>
          <li>
            <span className="font-medium">Local-first, remote-capable.</span>{" "}
            Designed to work fully on the local network, with Cloudflare Tunnel +
            TURN for secure remote access.
          </li>
        </ul>
      </section>

      {/* UI snapshots */}
      <section className="space-y-2">
        <h2 className="text-sm font-semibold text-primary">
          UI snapshots
        </h2>
        <p>
          HavenView’s UI is mobile-first. The dashboard brings together the live
          view and recent motion events, and the Activity tab lets you filter,
          search, and review recordings. Camera previews are blurred here for
          privacy.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 pt-1">
          {/* Dashboard screenshot */}
          <figure className="space-y-2 flex flex-col items-center">
            <div className="overflow-hidden rounded-xl bg-surface ring-1 ring-primary/5 max-w-[260px] w-full">
              <img
                src="/notes/havenview-dashboard.jpg"
                alt="HavenView dashboard showing live camera view and recent motion events. Blurred for privacy."
                className="w-full object-cover"
              />
            </div>
            <figcaption className="text-xs text-slate-500 text-center max-w-[260px]">
              Dashboard — live camera view, storage and connection status, and
              recent motion events (blurred for privacy).
            </figcaption>
          </figure>

          {/* Activity Page screenshot */}
          <figure className="space-y-2 flex flex-col items-center">
            <div className="overflow-hidden rounded-xl bg-surface ring-1 ring-primary/5 max-w-[260px] w-full">
              <img
                src="/notes/havenview-activity-page.jpg"
                alt="HavenView activity page showing the event list and filters. Blurred for privacy."
                className="w-full object-cover"
              />
            </div>
            <figcaption className="text-xs text-slate-500 text-center max-w-[260px]">
              Activity — filterable history of motion events with per-clip
              playback and saving (blurred for privacy).
            </figcaption>
          </figure>
        </div>
      </section>


      {/* What I'd like to improve */}
      <section className="space-y-2">
        <h2 className="text-sm font-semibold text-primary">
          What I&apos;d like to improve
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Smarter summaries and notifications — better object/person detection
            and grouped &quot;stories&quot; so my family gets a single useful
            notification (for example, &quot;Person at front door for 2 minutes&quot;)
            instead of a dozen motion pings.
          </li>
          <li>
            Surfacing more camera controls directly in HavenView — things like
            night vision mode, spotlight, IR lights, and audio settings so everything 
            can be configured within HavenView.
          </li>
          <li>
            Per-camera and per-user preferences — different notification rules
            for each camera and quieter defaults for people who don&apos;t want
            to see every motion event.
          </li>
        </ul>
      </section>
    </div>
  );
}