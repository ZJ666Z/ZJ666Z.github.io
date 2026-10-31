# Simulation assets and credits

## MuJoCo

The browser simulation uses the official `@mujoco/mujoco` WebAssembly package, version 3.14.0, in a Web Worker. MuJoCo is distributed under the Apache License 2.0; see the [upstream license](https://github.com/google-deepmind/mujoco/blob/main/LICENSE) and [MuJoCo repository](https://github.com/google-deepmind/mujoco). The model is exported from the Sesame simulation assets; see [`../SESAME-LICENSE.txt`](../SESAME-LICENSE.txt).

## FlyWire connectome data

The reduced circuit is exported from FlyWire v783 source data. The selected subgraph contains 2,874 neurons and 240,067 directed connections; it is not a full connectome or whole brain. The export manifest records source file hashes and selection notes. Related references:

- [Drosophila brain model](https://github.com/philshiu/Drosophila_brain_model)
- [FlyWire annotations](https://github.com/flyconnectome/flywire_annotations)
- [PFL3 and goal-directed turning](https://www.nature.com/articles/s41586-024-07039-2)
- [Sugar sensing and feeding model](https://www.nature.com/articles/s41586-024-07763-9)

The browser implementation is a reduced LIF experiment. Its engineered sensory encoding and motor readout are not a biological validation. The source implementation and export script are in the private project repository; they are not part of this deployed asset directory.

## PPO controller

The browser package contains exported weights from the `sesame-command-v1` mixed PPO checkpoint. The policy and controller are project artifacts; the browser experiment does not connect to hardware. Sesame model licensing is documented in [`../SESAME-LICENSE.txt`](../SESAME-LICENSE.txt).

## Strawberry visual cue

The strawberry model is from [Grab3D](http://grab3d.com/models/food/strawberry/). The source page identifies the model as CC0 1.0 and permits redistribution. The original grouped asset is retained unchanged as `fruit/strawberry-source.glb`; the extracted single-berry `fruit/strawberry.glb` contains 3,992 triangles and is 635,152 bytes. It is a visual cue, not a physics collider. See [`fruit/SOURCES.txt`](fruit/SOURCES.txt) and the [CC0 1.0 deed](https://creativecommons.org/publicdomain/zero/1.0/).
