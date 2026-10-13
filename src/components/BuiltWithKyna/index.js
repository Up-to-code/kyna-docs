import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {kynaApps} from '@site/src/data/kyna-apps';

export function AppsTable() {
  return (
    <>
    <p className="kyna-app-table-hint">Scroll the table horizontally to see native libraries and evidence.</p>
    <div className="kyna-app-table-scroll" role="region" aria-label="Applications built with Kyna" tabIndex={0}>
      <table className="kyna-app-table">
        <caption className="kyna-visually-hidden">Applications and runnable examples built with Kyna</caption>
        <thead>
          <tr>
            <th scope="col">Application</th>
            <th scope="col">Written in Kyna</th>
            <th scope="col">Native libraries</th>
            <th scope="col">Evidence</th>
          </tr>
        </thead>
        <tbody>
          {kynaApps.map((app) => (
            <tr key={app.name}>
              <td><a href={app.source}>{app.name}</a><p>{app.kind}</p></td>
              <td>{app.behavior}</td>
              <td>{app.packages}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export function MusicImage() {
  const src = useBaseUrl('/img/apps/kyna-music-macos.png');
  return <img className="kyna-app-image" src={src} width={1320} height={852} loading="lazy"
    alt="Kyna Music on macOS, showing playlists, an album grid, now playing and playback controls." />;
}

export function MusicVideo() {
  const src = useBaseUrl('/video/kyna-music-macos.mp4');
  const poster = useBaseUrl('/img/apps/kyna-music-macos.png');
  return (
    <figure className="kyna-app-media">
      <video className="kyna-app-video" controls playsInline preload="none" poster={poster}
        aria-label="Kyna Music application walkthrough" aria-describedby="music-video-description">
        <source src={src} type="video/mp4" />
        <a href={src}>Download the Kyna Music walkthrough.</a>
      </video>
      <figcaption id="music-video-description">
        A 25.5-second recording of the actual app, without audio: playback, library navigation,
        the play-all queue, and live search.
      </figcaption>
    </figure>
  );
}
