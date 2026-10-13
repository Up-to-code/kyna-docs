// Only applications with Kyna source and runnable build/test evidence belong here.
export const kynaApps = [
  {
    name: 'Kyna Music',
    kind: 'Desktop application',
    behavior: 'Search, playlists, likes, queue, shuffle, repeat and playback decisions.',
    packages: 'Typed Qt Quick + Multimedia adapter',
    source: 'https://github.com/qentrah/kyna-music',
    status: 'Windows x64, Linux x64 and macOS ARM64 CI passed.',
  },
  {
    name: 'Native library showcase',
    kind: 'Interactive demo',
    behavior: 'Input callbacks, convex hull drawing and regression actions.',
    packages: 'gui · geometry · ml',
    source: 'https://github.com/qentrah/Kyna/blob/main/examples/native/apps/showcase.ky',
    status: 'Running desktop app and video available.',
  },
  {
    name: 'Convex hull viewer',
    kind: 'GUI example',
    behavior: 'Computes a 2D hull and draws its vertices in a window.',
    packages: 'gui · geometry',
    source: 'https://github.com/qentrah/Kyna/blob/main/examples/native/apps/gui_hull.ky',
    status: 'Part of the native-library examples.',
  },
  {
    name: 'Mesh inspection',
    kind: 'CLI example',
    behavior: 'Loads an OFF mesh and reports topology, bounds, area and volume.',
    packages: 'geometry',
    source: 'https://github.com/qentrah/Kyna/blob/main/examples/native/apps/mesh.ky',
    status: 'Tetrahedron fixture and measurements verified.',
  },
  {
    name: 'Linear regression',
    kind: 'CLI example',
    behavior: 'Trains a model, predicts observations and releases the model.',
    packages: 'ml',
    source: 'https://github.com/qentrah/Kyna/blob/main/examples/native/apps/regression.ky',
    status: 'Results compared with direct C++ calls.',
  },
];
