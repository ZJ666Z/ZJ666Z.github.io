# Workshop asset credits

These downloaded models, texture sets and HDRI are provided by **Poly Haven** under [CC0 1.0](https://polyhaven.com/license). They can be used, modified and redistributed, including commercially. All selected assets are stored locally; the running page does not fetch third-party assets.

## Models in the scene

| Asset | Creator | Use |
| --- | --- | --- |
| [Metal Office Desk](https://polyhaven.com/a/metal_office_desk) | Ulan Cabanilla | Two metal drawer desks beneath the custom steel worktop |
| [Metal Stool 01](https://polyhaven.com/a/metal_stool_01) | Ulan Cabanilla | Upholstered workshop stool |
| [Tool Cart](https://polyhaven.com/a/tool_cart) | Savva Zakharov | Wheeled workshop storage |
| [Bench Vice 01](https://polyhaven.com/a/bench_vice_01) | Antanas Kep; rigging by Yann Kervran | Table-edge vice |
| [Metal Toolbox](https://polyhaven.com/a/metal_toolbox) | Mateusz Sadek | Open toolboxes grouped on the shelving and workbench |
| [Vintage Spacecraft Instrument](https://polyhaven.com/a/vintage_spacecraft_instrument) | Michał Wiśniewski | Bench diagnostic instrument |
| [Pliers](https://polyhaven.com/a/pliers) | PierreB3D | Foreground hand tools |
| [Classic Laptop](https://polyhaven.com/a/classic_laptop) | Arrangemonk | Neural-activity terminal; original screen surface receives the site's live canvas |
| [Desk Lamp Arm 01](https://polyhaven.com/a/desk_lamp_arm_01) | Kuutti Siitonen; original rig by Yann Kervran | Articulated workshop task lamp, with restrained emission only on its bulb material |
| [Circuit Board](https://polyhaven.com/a/circuit_board) | Benny Weimer | Detailed spare motherboard on the cutting mat |

Original geometry and 1K baked PBR maps are retained. Source glTF files were packed into self-contained GLBs; added parent transforms center and ground them. Scene placement changes their scale and orientation. The vice retains its skeletal structure; the official lamp glTF provides a static pose. The laptop's separate display material is replaced at runtime with a live project canvas, with only that surface's UVs remapped. This is environmental scenery, not a claim that these specific tools or this desktop motherboard were used in the physical Sesame project.

The lamp is anchored at its tabletop clamp contact at the rear edge, so its lower bolt intentionally extends below the worktop. Only the bulb receives added warm emission; the orange housing keeps its original material. The laptop's 1.223:1 display receives a 1024 × 838 canvas with upright, normalized UVs and restrained physical glass reflections; no keyboard or housing texture is replaced. The detail manifest records these runtime changes and a placement snapshot, including the lamp's measured world-space bulb center for scene-light alignment. Current scene transforms remain in `src/workshop-assets.js`.

## Additional repair-bench props

| Asset | Creator | Intended use |
| --- | --- | --- |
| [Screwdriver](https://polyhaven.com/a/screwdriver) | PierreB3D | Red-handled tool within the right-side repair group |
| [Ratchet Wrench](https://polyhaven.com/a/ratchet_wrench) | John Hutcheson | Chrome tool beside the mat and vice |
| [Small Plastic Torch](https://polyhaven.com/a/small_plastic_torch) | Abiyyu Panggalih (Abiyyu_xyz) | Inspection flashlight, retaining its original transparent lens |
| [Measuring Tape 01](https://polyhaven.com/a/measuring_tape_01) | Kuutti Siitonen | Compact measuring tool near the mat |
| [Lubricant Spray](https://polyhaven.com/a/lubricant_spray) | James Ray Cock | Maintenance container with separately modeled straw and tape |

These five props use the official 1K glTF geometry and all of its authored PBR channels, packed without decimation or texture recompression. A parent transform centers each asset in X/Z and grounds it at Y=0. The flashlight keeps the supplied transparent glass material; no synthetic lamp is embedded. The official ratchet glTF is static, without the optional Blender rig. The spray can's straw, tape and can remain separate, correctly positioned meshes. Tool rotations and final placements are scene-level choices, not baked alterations of the source models. Their per-source-file MD5 values, final GLB SHA256 values, triangle counts, texture byte totals and placement notes are recorded in `bench/bench-manifest.json`.

## Service-bench detail kits

| Asset | Creator | Use |
| --- | --- | --- |
| [Office Notepads](https://polyhaven.com/a/office_notepads) | Ulan Cabanilla | Loose folded note sheet, paper stack and sticky notes beside the electronics area |
| [Stationery Supplies](https://polyhaven.com/a/stationery_supplies) | Mateusz Sadek | Individual pencils and pens, plus a metal pencil cup |
| [Garden Gloves 01](https://polyhaven.com/a/garden_gloves_01) | Satyaki Mandal | Worn fabric/rubber gloves beside the toolbox |
| [Modular Electric Cables](https://polyhaven.com/a/modular_electric_cables) | Kuutti Siitonen | Selected loose electrical components and wall-mounted fixtures |

The four self-contained GLBs total 12,195,820 bytes and 53,978 source triangles, retaining official geometry and embedded 1K PBR textures. Paper, stationery and cable kits are catalogue collections: runtime selects named parts and grounds each independently rather than displaying the catalogue grid. Pens intentionally sit inside the cup. Only `office_notepads_a4_b` receives a new canvas albedo and planar UV mapping for an illustrative robot bench sketch; its authored folds, roughness and normal textures remain. This sheet is presentation artwork, not an engineering drawing or a source experiment record. Source URLs, authors, MD5/SHA-256 hashes and runtime-selection notes are recorded in `service/service-manifest.json`.

The detached cover is a runtime copy of the robot's original CAD top, at the same scale as the robot. The shallow fastener tray, screws/washers, rear folded curtain, mounted cyan/magenta light fixtures and ventilation grille are code-built scenery, not downloaded assets or scans of physical project equipment. The neon lighting treatment does not add or replace any third-party model.

## Materials and lighting

| Asset | Creator | Use |
| --- | --- | --- |
| [Blue Metal Plate](https://polyhaven.com/a/blue_metal_plate) | Rob Tuytel | Worn painted steel worktop, diffuse/roughness/OpenGL normal |
| [Hangar Concrete Floor](https://polyhaven.com/a/hangar_concrete_floor) | Dimitrios Savva | Room floor |
| [Concrete Wall 006](https://polyhaven.com/a/concrete_wall_006) | Charlotte Baglioni, Dario Barresi | Moderately tinted room walls |
| [Workshop HDRI](https://polyhaven.com/a/workshop) | Dimitrios Savva, Jarod Guest | Indoor image-based lighting and reflections |

`Metal Plate 02` by Rob Tuytel is retained as an unused alternative texture set. The worktop uses a wider region of Blue Metal Plate to expose seams and wear; shader desaturation, tint, normal strength and UVs match the scene's graphite palette without modifying source texture files. Desktop-only ambient occlusion adds contact shading; phone layouts omit that postprocessing pass.

Detailed URLs, file hashes, dimensions and processing notes are in `models-manifest.json`, `props/props-manifest.json`, `details/details-manifest.json`, `bench/bench-manifest.json`, `service/service-manifest.json`, and `textures/manifest.json`. Official website preview images were used only for private quality checks and are not distributed with the site.

The Sesame robot has its own CAD source and Apache-2.0 notices in the parent assets directory; it was not replaced with a generic third-party robot.
