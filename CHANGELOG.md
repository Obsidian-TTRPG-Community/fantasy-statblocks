# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.10.3](https://github.com/javalent/fantasy-statblocks/compare/4.10.2...4.10.3) (2026-01-21)


### Bug Fixes

* Add support for additional variables with 5etools importer ([2b5bd85](https://github.com/javalent/fantasy-statblocks/commit/2b5bd859a75fc1be33a807b522d3ba45f010c3de))
* Improvements to trait modification ([71c6336](https://github.com/javalent/fantasy-statblocks/commit/71c63363f31d11db2fc1c0ca1641981607f7311f))

## [4.10.2](https://github.com/javalent/fantasy-statblocks/compare/4.10.1...4.10.2) (2025-09-27)


### Bug Fixes

* Fixes issue where a `.` in a layout name would crash plugin ([651c2cd](https://github.com/javalent/fantasy-statblocks/commit/651c2cdb2129fe482c11724ad6707114bb5b080e))

## [4.10.1](https://github.com/javalent/fantasy-statblocks/compare/4.10.0...4.10.1) (2025-08-04)


### Bug Fixes

* Fixes weapon name when using the pathfinder importer ([98f9f28](https://github.com/javalent/fantasy-statblocks/commit/98f9f2892557f51ce5a244069a0836a6b7b89a7d))

## [4.10.0](https://github.com/javalent/fantasy-statblocks/compare/4.9.1...4.10.0) (2025-07-19)


### Features

* Added layouts for Daggerheart Adversaries, Cards and Environments ([#490](https://github.com/javalent/fantasy-statblocks/issues/490)) ([adbc2c0](https://github.com/javalent/fantasy-statblocks/commit/adbc2c03ae5ab1eaad257c90ea9091273f1877ae))

## [4.9.1](https://github.com/javalent/fantasy-statblocks/compare/4.9.0...4.9.1) (2025-05-08)


### Bug Fixes

* fixes issue where using numbers as property values instead of strings would incorrectly parse as dice (close [#488](https://github.com/javalent/fantasy-statblocks/issues/488)) ([0d83c8f](https://github.com/javalent/fantasy-statblocks/commit/0d83c8f1fc7bd130f4b490d930429aa888579489))

## [4.9.0](https://github.com/javalent/fantasy-statblocks/compare/4.8.1...4.9.0) (2025-05-01)


### Features

* Add new Pathfinder 2e Creature layout ([#436](https://github.com/javalent/fantasy-statblocks/issues/436)) ([#438](https://github.com/javalent/fantasy-statblocks/issues/438)) ([9cfca6c](https://github.com/javalent/fantasy-statblocks/commit/9cfca6c5892e83be4d75faafce37d255d370ab39))
* Allow traits for `saves` type properties ([d35a8ed](https://github.com/javalent/fantasy-statblocks/commit/d35a8ed6d374d92eae736eeff1e01f9f11393179))

## [4.8.1](https://github.com/javalent/fantasy-statblocks/compare/4.8.0...4.8.1) (2024-11-21)


### Bug Fixes

* Exposes LinkStringifier and MarkdownRenderer methods on the FantasyStatblocks API ([b4571e1](https://github.com/javalent/fantasy-statblocks/commit/b4571e1fb5e5206461f56bf9726b40984878164f))

## [4.8.0](https://github.com/javalent/fantasy-statblocks/compare/4.7.8...4.8.0) (2024-11-05)


### Features

* Initial implementation of pathbuilder import ([#447](https://github.com/javalent/fantasy-statblocks/issues/447)) ([a0a39b0](https://github.com/javalent/fantasy-statblocks/commit/a0a39b09ec92575e4d1c7a4fda3c70982b0e94d1))

## [4.7.8](https://github.com/javalent/fantasy-statblocks/compare/4.7.7...4.7.8) (2024-09-19)


### Bug Fixes

* Fixes issue where an empty match array could cause the dice parser to fail ([be9aa85](https://github.com/javalent/fantasy-statblocks/commit/be9aa85ad8e675e3dcbe22de5fe8c3ff9fa90ef0))
* Improves behavior of additive and reductive traits (close [#456](https://github.com/javalent/fantasy-statblocks/issues/456), close [#421](https://github.com/javalent/fantasy-statblocks/issues/421)) ([12df383](https://github.com/javalent/fantasy-statblocks/commit/12df3838d5e755fa2f5aa66cf3188b3dab7a3754))

## [4.7.7](https://github.com/javalent/fantasy-statblocks/compare/4.7.6...4.7.7) (2024-09-11)


### Bug Fixes

* Fixes issue with dependency causing settings tab to not fully load ([b5f96c5](https://github.com/javalent/fantasy-statblocks/commit/b5f96c538a24d178d3e6d4cf1894e0322251bcb1))

## [4.7.6](https://github.com/javalent/fantasy-statblocks/compare/4.7.5...4.7.6) (2024-09-11)


### Bug Fixes

* temp fix for failure to load ([b3e4e21](https://github.com/javalent/fantasy-statblocks/commit/b3e4e210f42a9bdf9fe8d0b69b0df42fea7b59c5))

## [4.7.5](https://github.com/javalent/fantasy-statblocks/compare/4.7.4...4.7.5) (2024-09-11)


### Bug Fixes

* Disable API spec generation ([5dc8165](https://github.com/javalent/fantasy-statblocks/commit/5dc81652333cf020d2d07dcb5f284edc29110465))

## [4.7.4](https://github.com/javalent/fantasy-statblocks/compare/4.7.3...4.7.4) (2024-09-11)


### Bug Fixes

* Removed deprecated global app reference ([fde858b](https://github.com/javalent/fantasy-statblocks/commit/fde858ba4f941cb6d7f4e8a8a7299b6c8b27b38c))
* Updated several outdated dependencies ([26f5355](https://github.com/javalent/fantasy-statblocks/commit/26f53556e62a99f9c7da39b612839ceec6b452f6))

## [4.7.3](https://github.com/javalent/fantasy-statblocks/compare/4.7.2...4.7.3) (2024-09-11)


### Bug Fixes

* fixes incorrect link parsing in the stringifier ([fbbf048](https://github.com/javalent/fantasy-statblocks/commit/fbbf048ba551e4a1477c5c8235b9a0930fd03347))

## [4.7.2](https://github.com/javalent/fantasy-statblocks/compare/4.7.1...4.7.2) (2024-09-10)


### Bug Fixes

* Fixes stringify skipping the sixth element of a list (close [#451](https://github.com/javalent/fantasy-statblocks/issues/451)) ([7dbc4a9](https://github.com/javalent/fantasy-statblocks/commit/7dbc4a9c99fb72a8c189513f13b778277cf37f88))
* inspect image property and fix wikilinks ([bbc4ac8](https://github.com/javalent/fantasy-statblocks/commit/bbc4ac835717c4d987bb9dfc650e0fde32a51b65))

## [4.7.1](https://github.com/javalent/fantasy-statblocks/compare/4.7.0...4.7.1) (2024-09-06)


### Bug Fixes

* Subheadings should now properly stringify arrays ([5c3da30](https://github.com/javalent/fantasy-statblocks/commit/5c3da3000736eb0560fafd088edefac43057dea1))

## [4.7.0](https://github.com/javalent/fantasy-statblocks/compare/4.6.0...4.7.0) (2024-09-06)


### Features

* Adds support for importing from PF2eMonsterTool ([df7f7f3](https://github.com/javalent/fantasy-statblocks/commit/df7f7f3f04ba37f019ff3c09b0e14e54786bc443))


### Bug Fixes

* Adds several missed fields to the TetraCube import ([4eb00cd](https://github.com/javalent/fantasy-statblocks/commit/4eb00cd8ec7a7708fae3c3164691a6550fdf81f5))
* **css:** prioritize pf2e icons over system font ([#420](https://github.com/javalent/fantasy-statblocks/issues/420)) ([4de2457](https://github.com/javalent/fantasy-statblocks/commit/4de2457cdd8b2a91fb99e8a794b489e297ca9ccf))
* Fix stringifier incorrectly matching some links ([#435](https://github.com/javalent/fantasy-statblocks/issues/435)) ([fe436d5](https://github.com/javalent/fantasy-statblocks/commit/fe436d50da8e37612b0188be1b9f306043a9491e))
* Property lines now correctly stringify arrays ([9a27da8](https://github.com/javalent/fantasy-statblocks/commit/9a27da8633640dd1759f992063cf8e5ae3af4a1a))

## [4.6.0](https://github.com/javalent/fantasy-statblocks/compare/4.5.0...4.6.0) (2024-07-05)


### Features

* Pass the current property as a parameter for trait callbacks ([#432](https://github.com/javalent/fantasy-statblocks/issues/432)) ([c9475de](https://github.com/javalent/fantasy-statblocks/commit/c9475def0df2ce3919ee4d263f461bd5da8b3a3d))

## [4.5.0](https://github.com/javalent/fantasy-statblocks/compare/4.4.2...4.5.0) (2024-07-04)


### Features

* Allow markdown formatting in trait names (close [#428](https://github.com/javalent/fantasy-statblocks/issues/428)) ([#430](https://github.com/javalent/fantasy-statblocks/issues/430)) ([dec459c](https://github.com/javalent/fantasy-statblocks/commit/dec459cb1be8cbb7cb7be73cfd2362a69a534208))

## [4.4.2](https://github.com/javalent/fantasy-statblocks/compare/4.4.1...4.4.2) (2024-05-09)


### Bug Fixes

* Fixes "Default Layout" setting not being respected until restart ([8f24d0d](https://github.com/javalent/fantasy-statblocks/commit/8f24d0dc90b403c958edb5e1f43877e4cae3a314))

## [4.4.1](https://github.com/javalent/fantasy-statblocks/compare/4.4.0...4.4.1) (2024-05-07)


### Bug Fixes

* Fixes extends behavior not preferring in-note parameters ([72cc62e](https://github.com/javalent/fantasy-statblocks/commit/72cc62ea5f61a4ab8854c23a5f70a9bcbf372226))
* Fixes issue with watcher not being able to parse some files ([1d625f7](https://github.com/javalent/fantasy-statblocks/commit/1d625f79971ecaf8afc1a3c0f81d37f3bc9d2176))

## [4.4.0](https://github.com/javalent/fantasy-statblocks/compare/4.3.5...4.4.0) (2024-05-06)


### Features

* Adds new methods to the API to transform Statblock Links back to Obsidian links ([fb80517](https://github.com/javalent/fantasy-statblocks/commit/fb805170330ee64073f0c4ad58c53544c805fc51))

## [4.3.5](https://github.com/javalent/fantasy-statblocks/compare/4.3.4...4.3.5) (2024-05-05)


### Bug Fixes

* Fix issue where some creatures wouldn't be able to export as PNG ([92ffc68](https://github.com/javalent/fantasy-statblocks/commit/92ffc68488f964546f28db19a49378539ccc89bd))
* Linkifying spells now ignores `*` ([26a1898](https://github.com/javalent/fantasy-statblocks/commit/26a189896221a3acdf721e1df3410fe3a5e1ea8c))

## [4.3.4](https://github.com/javalent/fantasy-statblocks/compare/4.3.3...4.3.4) (2024-05-03)


### Bug Fixes

* Fixes issue where non-string properties would try to replace links ([0ee0330](https://github.com/javalent/fantasy-statblocks/commit/0ee03309987bde67e34671929b852300dc70d0d6))
* Fixes issue where the default fallback for non-conditional blocks would cause a list to render (close [#409](https://github.com/javalent/fantasy-statblocks/issues/409)) ([de5b6bf](https://github.com/javalent/fantasy-statblocks/commit/de5b6bff8fa86f463aecb57da858f4e5b42c7ab4))

## [4.3.3](https://github.com/javalent/fantasy-statblocks/compare/4.3.2...4.3.3) (2024-05-01)


### Bug Fixes

* Dice callbacks should now correctly execute even if parse dice is off ([1602e6c](https://github.com/javalent/fantasy-statblocks/commit/1602e6ca02effbacf12fb3c8a060b51dde2e60e6))
* Fixes incorrect inheritance of certain properties (closes [#400](https://github.com/javalent/fantasy-statblocks/issues/400)) ([e83b300](https://github.com/javalent/fantasy-statblocks/commit/e83b30011bea0fa3002ee630ec2f423cc4723c52))
* Fixes issue where margins around spells would be incorrect if multiple spell blocks were rendered (close [#337](https://github.com/javalent/fantasy-statblocks/issues/337)) ([d90e8e1](https://github.com/javalent/fantasy-statblocks/commit/d90e8e196b6c8a51067a0a1b18a9f81ba22c0f57))
* Fixes issue where the Bestiary could resolve prematurely ([7668707](https://github.com/javalent/fantasy-statblocks/commit/7668707ab337457dd74c478edf38494f93f1fb2a))
* Removing a dice parser now saves properly (close [#382](https://github.com/javalent/fantasy-statblocks/issues/382)) ([4219b98](https://github.com/javalent/fantasy-statblocks/commit/4219b983d84b96268a4a09252ab8d8e766b1b257))
* Temporarily disable the Atomic Write functionality pending more investigation into data loss issues. ([97d38bc](https://github.com/javalent/fantasy-statblocks/commit/97d38bc1dcb579f16231a935aa6948b8394e5acc))
* Updates how default layouts are stored in the data file to reduce data file operations ([e1eb126](https://github.com/javalent/fantasy-statblocks/commit/e1eb1267959d70ebf3942927a5fbfa0f2516c582))

## [4.3.2](https://github.com/javalent/fantasy-statblocks/compare/4.3.1...4.3.2) (2024-04-30)


### Bug Fixes

* Check for `hit_dice` property in `hp` dice callback for the Basic 5e Layout ([fb2bbe6](https://github.com/javalent/fantasy-statblocks/commit/fb2bbe6672c23681c8ab970a6d926aacccbcee93))
* Fixes instance where specifying a dice callback would override the dice settings for a statblock ([d60f6de](https://github.com/javalent/fantasy-statblocks/commit/d60f6def9c442d1077b2fdf318b256c95c35700d))
* Remove unused components ([133c36e](https://github.com/javalent/fantasy-statblocks/commit/133c36eaec4c0e920933e00e410415ca47d18ebe))

## [4.3.1](https://github.com/javalent/fantasy-statblocks/compare/4.3.0...4.3.1) (2024-04-29)


### Bug Fixes

* Better scoping for BnB css ([297e2be](https://github.com/javalent/fantasy-statblocks/commit/297e2be8415979ce86b9cfe127e53a76a59880df))

## [4.3.0](https://github.com/javalent/fantasy-statblocks/compare/4.2.4...4.3.0) (2024-04-27)


### Features

* Text content is now rendered as markdown by default. The "Render as Markdown" option has been removed. ([fb58048](https://github.com/javalent/fantasy-statblocks/commit/fb580482d1764b1132d6661d5ffcdbc961e76ffb))


### Bug Fixes

* Adds Regional Effects to the Basic 5e Statblock ([8274249](https://github.com/javalent/fantasy-statblocks/commit/82742497a697bcbdb1b4d9ef94145d91261242dc))

## [4.2.4](https://github.com/javalent/fantasy-statblocks/compare/4.2.3...4.2.4) (2024-04-23)


### Bug Fixes

* Sync to new Dice Roller API ([672dc8b](https://github.com/javalent/fantasy-statblocks/commit/672dc8b979e9a637590d0e293181176ff9e77b2a))

## [4.2.3](https://github.com/javalent/fantasy-statblocks/compare/4.2.2...4.2.3) (2024-04-22)


### Bug Fixes

* Fixes issue where dice integration no longer works (close [#398](https://github.com/javalent/fantasy-statblocks/issues/398)) ([447f8ab](https://github.com/javalent/fantasy-statblocks/commit/447f8ab4e68dd673f4dd89ea58fc74558df25f4f))
* Switches to @javalent/utilities ([f25e845](https://github.com/javalent/fantasy-statblocks/commit/f25e845d3549c3b8327a02eed61b88a15dfca473))

## [4.2.2](https://github.com/javalent/fantasy-statblocks/compare/4.2.1...4.2.2) (2024-04-19)


### Bug Fixes

* Deleting a monster now actually removes it from the data file before saving ([92c1402](https://github.com/javalent/fantasy-statblocks/commit/92c1402e9b70b7fb1c67400d9ab1e7cafefe90a1))

## [4.2.1](https://github.com/javalent/fantasy-statblocks/compare/4.2.0...4.2.1) (2024-04-19)


### Bug Fixes

* Fixes some bugs related to trait inheritance ([1814062](https://github.com/javalent/fantasy-statblocks/commit/1814062b3927147255ae91ed7234a53a589b72ef))
* Improve behavior of self-updating feature ([7f8b84a](https://github.com/javalent/fantasy-statblocks/commit/7f8b84ab14a53801f62413353fd39e6f9a0aa3f3))

## [4.2.0](https://github.com/javalent/fantasy-statblocks/compare/4.1.7...4.2.0) (2024-04-18)


### Features

* Statblocks will now attempt to self-update when the monster they are rendering has been updated. ([b7731ef](https://github.com/javalent/fantasy-statblocks/commit/b7731efea9d3aaf13aead6966382d7a6c51951fb))


### Bug Fixes

* Deleting a monster should now save ([e81a00f](https://github.com/javalent/fantasy-statblocks/commit/e81a00fb0723617c9e847d8beea6d22953034af3))
* Switch to new dice roller module ([09a5047](https://github.com/javalent/fantasy-statblocks/commit/09a50478836e4e602652ed86ebf4b392c2d4af07))

## [4.1.7](https://github.com/javalent/fantasy-statblocks/compare/4.1.6...4.1.7) (2024-04-15)


### Bug Fixes

* Added "Delete filtered creatures" button to Bestiary in settings ([ea238e3](https://github.com/javalent/fantasy-statblocks/commit/ea238e3b5ddbbcfbf8e3d76a612ff3d208a7d1ba))
* Fixes error where array values added to the Bestiary index would be stringified as-is ([7cc3e4b](https://github.com/javalent/fantasy-statblocks/commit/7cc3e4bf72c7da8faff03250176739df156f978d))

## [4.1.6](https://github.com/javalent/fantasy-statblocks/compare/4.1.5...4.1.6) (2024-04-15)


### Bug Fixes

* Adds `extends` to the statblock editor suggest ([39067b0](https://github.com/javalent/fantasy-statblocks/commit/39067b0073d1641e38423c2d9f3e62b4ac738b43))

## [4.1.5](https://github.com/javalent/fantasy-statblocks/compare/4.1.4...4.1.5) (2024-04-04)


### Bug Fixes

* Fixes "Start Encounter" IT button ([21b4cc9](https://github.com/javalent/fantasy-statblocks/commit/21b4cc9e655c7199682e21060d37bd6ca58a920b))

## [4.1.4](https://github.com/javalent/fantasy-statblocks/compare/4.1.3...4.1.4) (2024-03-29)


### Bug Fixes

* Fixes 5e.tools import text replacement ([59877b3](https://github.com/javalent/fantasy-statblocks/commit/59877b32ee5b65c5c0a7edadacda42e14f8bbf49))

## [4.1.3](https://github.com/javalent/fantasy-statblocks/compare/4.1.2...4.1.3) (2024-03-27)


### Bug Fixes

* Adds support for the `ac_class` property ([8e9e26b](https://github.com/javalent/fantasy-statblocks/commit/8e9e26ba428dfefe01424b21d6ded60e7fed0587))

## [4.1.2](https://github.com/javalent/fantasy-statblocks/compare/4.1.1...4.1.2) (2024-03-27)


### Bug Fixes

* Adds new Creature pane commands: Reveal existing, Open new ([81a9491](https://github.com/javalent/fantasy-statblocks/commit/81a9491a9d69c8928e104485ba0eb512e12a3920))
* Creature pane ribbon button will now open a new pane with a `mod`-click (cmd/ctrl) ([a4ba38a](https://github.com/javalent/fantasy-statblocks/commit/a4ba38a55adf4dff59eece19da6d7b876440954e))
* Creature pane will now intelligently open new panes alongside existing ones (close [#342](https://github.com/javalent/fantasy-statblocks/issues/342)) ([3040013](https://github.com/javalent/fantasy-statblocks/commit/30400131a343addffad068bdb1729eee8af64be3))
* Fixes 5e.tools AC import not including additional AC info (close [#340](https://github.com/javalent/fantasy-statblocks/issues/340)) ([6116540](https://github.com/javalent/fantasy-statblocks/commit/61165403859cd13ac3f3fc92c0eb8f6636df8b2a))
* Fixes issue where traits would be bold by default (close [#376](https://github.com/javalent/fantasy-statblocks/issues/376)) ([4152ffa](https://github.com/javalent/fantasy-statblocks/commit/4152ffa99efa5844a141e25e3154f6f800c94ecd))
* Uses Dice Roller's average calculation instead of a rudimentary approach (close [#350](https://github.com/javalent/fantasy-statblocks/issues/350)) ([5affff8](https://github.com/javalent/fantasy-statblocks/commit/5affff80f5947f4409006c462f06e98251ce7f0d))

## [4.1.1](https://github.com/javalent/fantasy-statblocks/compare/4.1.0...4.1.1) (2024-03-23)


### Bug Fixes

* Adds Theme toggles to Previewer in Layout Editor ([e531fe8](https://github.com/javalent/fantasy-statblocks/commit/e531fe8d0b782587b8cb0999c30e92d9313dc4b3))
* Fixes scoping issue for Layout CSS in dark/light mode ([6f44db0](https://github.com/javalent/fantasy-statblocks/commit/6f44db06ec33cc4fbe9ad5fdd74b0586bb5b5689))
* Improves Previewer user experience ([05ec8c4](https://github.com/javalent/fantasy-statblocks/commit/05ec8c4f1d8b7033bfb2141330b781309b4f7d91))
* Remove outdated beta manifest ([1567fe5](https://github.com/javalent/fantasy-statblocks/commit/1567fe5637be1dadd231010a5dc50d2b8f0226c1))

## [4.1.0](https://github.com/javalent/fantasy-statblocks/compare/4.0.13...4.1.0) (2024-03-23)


### Features

* Adds Column settings in the Advanced pane of the Layout Editor ([0193fad](https://github.com/javalent/fantasy-statblocks/commit/0193fad4f1b16363245696efec488fbf5d6abb35))
* Revamps Appearance pane of the Layout Editor ([0193fad](https://github.com/javalent/fantasy-statblocks/commit/0193fad4f1b16363245696efec488fbf5d6abb35))

## [4.0.13](https://github.com/javalent/fantasy-statblocks/compare/4.0.12...4.0.13) (2024-03-20)


### Bug Fixes

* Add ability to add examples for dice parsers for future reference ([e1d365c](https://github.com/javalent/fantasy-statblocks/commit/e1d365c4d36d68a28863738b2e725820cbed99ad))
* Adds in PF2e specific dice parsers (close [#357](https://github.com/javalent/fantasy-statblocks/issues/357)) ([1449d79](https://github.com/javalent/fantasy-statblocks/commit/1449d79e2b2e8a3411551f31e58a97a3b37e4e26))
* **css:** add consistency to css variables for statblocks ([#369](https://github.com/javalent/fantasy-statblocks/issues/369)) ([6731d73](https://github.com/javalent/fantasy-statblocks/commit/6731d7351d68a0bcdfbbf5645d199ff85823f4fd))
* Expose Section Heading border color in layout editor ([9fdba90](https://github.com/javalent/fantasy-statblocks/commit/9fdba9074730eefff384c28210355c9370d6769b))
* Fixes issue where modifying a default layout could duplicate it in the settings list ([35d7ab4](https://github.com/javalent/fantasy-statblocks/commit/35d7ab42307a8b9fca147b3168f0d81d5854ecb5))
* Fixes issue where trying to add a dice parser without any defined would crash the plugin ([0a60234](https://github.com/javalent/fantasy-statblocks/commit/0a602342a031263c15b4238251f85f8d3a3ff48d))
* Improve Dice Parser UI in layout editor ([6115a6d](https://github.com/javalent/fantasy-statblocks/commit/6115a6d6ec77fd82a686052babaeba8253e40fa3))
* Inherit default parsers into 5e Layout ([54d9061](https://github.com/javalent/fantasy-statblocks/commit/54d90612d3db070c706813913e5c60b21074241d))
* Initialize Bestiary events hook before initializing file watcher ([08a1a5d](https://github.com/javalent/fantasy-statblocks/commit/08a1a5d57e7cb902cecfcb3475766c0f4977a590))
* New layouts will inherit default dice parsers by default ([59d8950](https://github.com/javalent/fantasy-statblocks/commit/59d89500fe37a5f7b30795094a48ab6f5621063d))
* Position 3 dot menu relative to container (close [#364](https://github.com/javalent/fantasy-statblocks/issues/364)) ([ef9c9f5](https://github.com/javalent/fantasy-statblocks/commit/ef9c9f57efa2f727265cf22efecabc06ee2ab06c))

## [4.0.12](https://github.com/javalent/fantasy-statblocks/compare/4.0.11...4.0.12) (2024-03-16)


### Bug Fixes

* Attempt to speed up initial FS parsing ([51a31ae](https://github.com/javalent/fantasy-statblocks/commit/51a31aee1af24593cc9c6ff011fcea5fe598cc68))

## [4.0.11](https://github.com/javalent/fantasy-statblocks/compare/4.0.10...4.0.11) (2024-03-16)


### Bug Fixes

* Fixes issue where the folder suggester wasn't interactable ([df149c8](https://github.com/javalent/fantasy-statblocks/commit/df149c8c24b03a113ba46c88789411e22e1862bb))

## [4.0.10](https://github.com/javalent/fantasy-statblocks/compare/4.0.9...4.0.10) (2024-03-13)


### Bug Fixes

* Fixes issue where creatures without an explicit name could cause the Bestiary to crash ([c7ea4ee](https://github.com/javalent/fantasy-statblocks/commit/c7ea4ee57cf9ade417cdd16fb89e2a7de84ec2b8))
* Fixes issue where importing the same layout twice and deleting one would delete both ([9c189eb](https://github.com/javalent/fantasy-statblocks/commit/9c189eb84a7186858ed5966dc7266b67657000ed))

## [4.0.9](https://github.com/javalent/fantasy-statblocks/compare/4.0.8...4.0.9) (2024-03-08)


### Bug Fixes

* Improves Bestiary event registration ([a0870e3](https://github.com/javalent/fantasy-statblocks/commit/a0870e31fbfe09a1caf42fc6b9f2c7a0f60ccb1f))

## [4.0.8](https://github.com/javalent/fantasy-statblocks/compare/4.0.7...4.0.8) (2024-03-08)


### Bug Fixes

* Properly return the FS Bestiary unloaders ([004e43f](https://github.com/javalent/fantasy-statblocks/commit/004e43ff60dc5d005038fe67856f31406dac2593))

## [4.0.7](https://github.com/javalent/fantasy-statblocks/compare/4.0.6...4.0.7) (2024-03-08)


### Bug Fixes

* Bestiary resolved events will re-fire after the vault is re-parsed ([2c8c8c7](https://github.com/javalent/fantasy-statblocks/commit/2c8c8c77a657c3b161cb67bd4ccfc4b0e28450f5))
* Fixes error handling in Statblock parser ([c6f7e7d](https://github.com/javalent/fantasy-statblocks/commit/c6f7e7d4858a21eeff298dba0f7e026874791894))
* Inline Statblocks will now have their links transformed properly ([a15d5c2](https://github.com/javalent/fantasy-statblocks/commit/a15d5c2f86dda2810626a3df76ee3cc65078fa78))
* Plugin is now properly registered with the Page Preview plugin ([c1e9237](https://github.com/javalent/fantasy-statblocks/commit/c1e9237f2f54c7e4c9e2bbbc286e9b032abf63cc))

## [4.0.6](https://github.com/javalent/fantasy-statblocks/compare/4.0.5...4.0.6) (2024-03-07)


### Bug Fixes

* Fixes issue where bestiary would never resolve if Parse Frontmatter was disabled ([16bfb03](https://github.com/javalent/fantasy-statblocks/commit/16bfb0316b22f6bb9182ac2764f2182c1e5d432b))

## [4.0.5](https://github.com/javalent/fantasy-statblocks/compare/4.0.4...4.0.5) (2024-03-07)


### Bug Fixes

* Update build ([c0543ed](https://github.com/javalent/fantasy-statblocks/commit/c0543ed2ffe85a336be84d5c362373a506dd4bcd))

## [4.0.4](https://github.com/javalent/fantasy-statblocks/compare/4.0.0...4.0.4) (2024-03-07)


### Miscellaneous Chores

* release 4.0.4 ([0048de5](https://github.com/javalent/fantasy-statblocks/commit/0048de5bc0385bdf2bb883852e5ab0708fd79954))

## [4.0.0](https://github.com/javalent/fantasy-statblocks/compare/3.19.3...4.0.0) (2024-03-07)


### ⚠ BREAKING CHANGES

* Full transition to new Bestiary API
* Creatures from notes are no longer saved to data.

### Features

* Adds ability to open note-based creatures directly from the bestiary in settings ([4669df8](https://github.com/javalent/fantasy-statblocks/commit/4669df8c73c026e1fd0fb04905b841d79cff6e14))
* Adds proper API typings for npm module ([dbf6b7d](https://github.com/javalent/fantasy-statblocks/commit/dbf6b7db5ec4b466d458ba15cf1a47abc241200e))
* Creatures from notes are no longer saved to data. ([1f08a96](https://github.com/javalent/fantasy-statblocks/commit/1f08a9608016da3938d7e855a3ae6f5ff7232690))
* Full transition to new Bestiary API ([0c58550](https://github.com/javalent/fantasy-statblocks/commit/0c5855071afa9d4c8509ecea6055f75218c228ea))
* New UI for Bestiary creatures in settings ([b6063aa](https://github.com/javalent/fantasy-statblocks/commit/b6063aa05b0b3bbbff63e18aee37a5a131c4570f))


### Bug Fixes

* Added isResolved, onResolved and onUpdated API hooks ([8d3b1e9](https://github.com/javalent/fantasy-statblocks/commit/8d3b1e959a5bf751230f98bddf6cc8ded9a0f4be))
* Adds rotation animation for CSS ([7df6249](https://github.com/javalent/fantasy-statblocks/commit/7df624977dc8bf63f808ae3b8f9602b90eacab47))
* Adds source field to 5e SRD bestiary ([7b3da4c](https://github.com/javalent/fantasy-statblocks/commit/7b3da4c032b693f10eae041894a19fe663963d96))
* Clean up dead plugin code ([3df6baf](https://github.com/javalent/fantasy-statblocks/commit/3df6baf3c6e5f0503b07135b936f793f6703f6d3))
* Correctly parses links for frontmatter creatures ([b182d8f](https://github.com/javalent/fantasy-statblocks/commit/b182d8f2de36471cf3c39557cf9eed4417d4e32b))
* Fixes some dice parser errors ([#353](https://github.com/javalent/fantasy-statblocks/issues/353)) ([35fb8a9](https://github.com/javalent/fantasy-statblocks/commit/35fb8a9159939d28f1b013d52beb8a5057d37f87))
* Global switch to Lucide icons ([ddc2ea4](https://github.com/javalent/fantasy-statblocks/commit/ddc2ea404e23e07a880087df871bf89ac517cf90))
* made link stringifier stateless ([52672ce](https://github.com/javalent/fantasy-statblocks/commit/52672ce01c2ac67d13910aaf333e31177b5a9e3a))
* Remove duplicated API methods from plugin definition ([780ab18](https://github.com/javalent/fantasy-statblocks/commit/780ab184661ff699d5a8dd858843170b820f8ae2))
* Switch to centralized suggestion class ([2914658](https://github.com/javalent/fantasy-statblocks/commit/29146587db7d0b9f6c6272109d1c9988b2f48db5))

## [3.19.3](https://github.com/javalent/fantasy-statblocks/compare/3.19.2...3.19.3) (2024-02-22)


### Bug Fixes

* Fixes appearance of parsed dice rolls in 5e ([153226e](https://github.com/javalent/fantasy-statblocks/commit/153226e1752a7a64b27fb2695198640fcac61a88))

## [3.19.2](https://github.com/javalent/fantasy-statblocks/compare/3.19.1...3.19.2) (2024-02-21)


### Bug Fixes

* Fixes issue where having DR installed but not enabled in FS would erroneously run dice callbacks ([2fa84c1](https://github.com/javalent/fantasy-statblocks/commit/2fa84c1ba2c48a5b7c672724b271df466eefef05))

## [3.19.1](https://github.com/javalent/fantasy-statblocks/compare/3.19.0...3.19.1) (2024-02-20)


### Bug Fixes

* Dice Callbacks will no longer try to execute if Dice Roller is not enabled ([5ec4019](https://github.com/javalent/fantasy-statblocks/commit/5ec40198276c570903d8d9d2d8a0606a9a5b9db9))

## [3.19.0](https://github.com/javalent/fantasy-statblocks/compare/3.18.1...3.19.0) (2024-02-14)


### Features

* Enables Layout-specific dice parsing using Regular Expressions and callbacks ([a6f482b](https://github.com/javalent/fantasy-statblocks/commit/a6f482b67db5606bda26b45915876454a793f493))
* Exposes some basic color settings for Layouts ([1716230](https://github.com/javalent/fantasy-statblocks/commit/17162304eff3ec4f3f251619ccd953b76b1bd057))
* New Layout Editor experience on Desktop / Tablet ([6d017c6](https://github.com/javalent/fantasy-statblocks/commit/6d017c68af30e6f7f32aa5388dc7ea062e3d3059))


### Bug Fixes

* Properly scope Bunkers and Badasses css ([ccf0296](https://github.com/javalent/fantasy-statblocks/commit/ccf0296fd4403a3a09e274ef2d47162e406aea80))

## [3.18.1](https://github.com/javalent/fantasy-statblocks/compare/3.18.0...3.18.1) (2024-02-02)


### Bug Fixes

* Expose the monster on Table ability modifier calculation callbacks ([7bad5f2](https://github.com/javalent/fantasy-statblocks/commit/7bad5f2981a587417be156f8d2f1a8c265e55a75))

## [3.18.0](https://github.com/javalent/fantasy-statblocks/compare/3.17.1...3.18.0) (2024-02-01)


### Features

* Adds Obsidian protocol handler `creature-pane` to open Creature Pane via an Obsidian link. Usage: `obsidian://creature-pane?creature=&lt;name&gt;` ([dee46de](https://github.com/javalent/fantasy-statblocks/commit/dee46deabdc8a02b78d3da8118504f763f0fb9f2))

## [3.17.1](https://github.com/javalent/fantasy-statblocks/compare/3.17.0...3.17.1) (2024-02-01)


### Bug Fixes

* Fixes issue where dice parsing would consume +/- values ([200f787](https://github.com/javalent/fantasy-statblocks/commit/200f787810aa747cf80195e4ae3219655f55a57c))

## [3.17.0](https://github.com/javalent/fantasy-statblocks/compare/3.16.3...3.17.0) (2024-01-27)


### Features

* Extract monster subtypes from 5e.tools tags ([9f8bf4e](https://github.com/javalent/fantasy-statblocks/commit/9f8bf4e5430015513bffca71d66deb8e85e3e511))


### Bug Fixes

* bump 5e layout version ([539a049](https://github.com/javalent/fantasy-statblocks/commit/539a04908cc01950b0c581fd68fe5224f8a8d845))
* Fixes extra whitespaces between links ([#331](https://github.com/javalent/fantasy-statblocks/issues/331)) ([9717c3c](https://github.com/javalent/fantasy-statblocks/commit/9717c3cf31ca8e32c68724b85a82b98ac9d1f7e4))
* Fixes subheading separator in basic 5e layout (close [#331](https://github.com/javalent/fantasy-statblocks/issues/331)) ([1b21bd7](https://github.com/javalent/fantasy-statblocks/commit/1b21bd7ad3c5bfb9f99694e3a7dfe97decaef8bc))
* Remove latin alphabet requirement for css classes (close [#338](https://github.com/javalent/fantasy-statblocks/issues/338)) ([79ada6c](https://github.com/javalent/fantasy-statblocks/commit/79ada6cabf1ffcb41d17f3450c76e0c1eba95b3e))

## [3.16.3](https://github.com/javalent/fantasy-statblocks/compare/3.16.2...3.16.3) (2024-01-12)


### Bug Fixes

* don't register popover for image if no image file exists ([e0dbcb7](https://github.com/javalent/fantasy-statblocks/commit/e0dbcb7eb40db90147069d18daf5bd6d99637350))

## [3.16.2](https://github.com/javalent/fantasy-statblocks/compare/3.16.1...3.16.2) (2023-12-06)


### Bug Fixes

* fixes multiline tables (breaks wikilinks in yaml style arrays coming from source...) ([79a29d1](https://github.com/javalent/fantasy-statblocks/commit/79a29d1dd6df371798362897dc62adb29d67201e))
* removes css import ([b874f6e](https://github.com/javalent/fantasy-statblocks/commit/b874f6e1ce6535885247cb9d56971171db2aeb29))
* typo (close [#310](https://github.com/javalent/fantasy-statblocks/issues/310)) ([8fe7242](https://github.com/javalent/fantasy-statblocks/commit/8fe7242ddf96e5eb69e0d3e207fd9fc76fca1a92))

## [3.16.1](https://github.com/javalent/fantasy-statblocks/compare/3.16.0...3.16.1) (2023-11-30)


### Bug Fixes

* Allows Group blocks to be set conditional ([d07b6ec](https://github.com/javalent/fantasy-statblocks/commit/d07b6ecc39cd7bff9c881ed80ccc7262ac4bb792))

## [3.16.0](https://github.com/javalent/fantasy-statblocks/compare/3.15.9...3.16.0) (2023-11-01)


### Features

* Adds Mythic Description in the Basic 5e Layout ([15e137d](https://github.com/javalent/fantasy-statblocks/commit/15e137d244d6f950b361294bccc5041414948ba9))


### Bug Fixes

* Enable section headings on inline groups ([e755ef4](https://github.com/javalent/fantasy-statblocks/commit/e755ef4bd2c8269ebf4668ddf7fb9f893e103c23))
* Traits will now properly display in inline groups ([385b0c0](https://github.com/javalent/fantasy-statblocks/commit/385b0c0600513a262f7839025155e0b8ff6424b5))

## [3.15.9](https://github.com/javalent/fantasy-statblocks/compare/3.15.8...3.15.9) (2023-11-01)


### Bug Fixes

* Fixes Parse for Dice being on preventing dice callbacks ([6d08509](https://github.com/javalent/fantasy-statblocks/commit/6d085093ef780bed4b46672bc1fe306db0ebc54c))
* Syncs order of action buttons in the 5e layout with IT's encounter blocks ([f7d4675](https://github.com/javalent/fantasy-statblocks/commit/f7d4675b9af9b00bd8bb3458320f9f477b080d56))

## [3.15.8](https://github.com/javalent/fantasy-statblocks/compare/3.15.7...3.15.8) (2023-10-21)


### Bug Fixes

* Fixes dice parsing displaying incorrectly ([c626dd9](https://github.com/javalent/fantasy-statblocks/commit/c626dd9a3244a4810e4032bb92971b5c9e07b0f2))
* Fixes image blocks not resolving if a property other than `image` is used (close [#300](https://github.com/javalent/fantasy-statblocks/issues/300)) ([d0a4b30](https://github.com/javalent/fantasy-statblocks/commit/d0a4b30724bb70051b61dbc2f341d135a03489f8))
* Saves blocks will now allow strings (close [#267](https://github.com/javalent/fantasy-statblocks/issues/267)) ([3bca930](https://github.com/javalent/fantasy-statblocks/commit/3bca930b5f9238abd3bcb19a585187132bf0bf94))

## [3.15.7](https://github.com/javalent/fantasy-statblocks/compare/3.15.6...3.15.7) (2023-10-21)


### Bug Fixes

* Fixes linkifying spells ([ae0a52b](https://github.com/javalent/fantasy-statblocks/commit/ae0a52b33f3422de1a87eb87777c95bd3b5a225a))

## [3.15.6](https://github.com/javalent/fantasy-statblocks/compare/3.15.5...3.15.6) (2023-10-19)


### Bug Fixes

* Fixes resolving markdown style links when URI encoded ([604f4d7](https://github.com/javalent/fantasy-statblocks/commit/604f4d76411ab238200e01062df965ebf66de006))

## [3.15.5](https://github.com/javalent/fantasy-statblocks/compare/3.15.4...3.15.5) (2023-10-19)


### Bug Fixes

* Improves help text for dice callbacks ([b69cc61](https://github.com/javalent/fantasy-statblocks/commit/b69cc614509b73cac46ca60cccdf489511902aaa))

## [3.15.4](https://github.com/javalent/fantasy-statblocks/compare/3.15.3...3.15.4) (2023-10-19)


### Bug Fixes

* remove logs ([09d92e0](https://github.com/javalent/fantasy-statblocks/commit/09d92e0209dce35db0b6afe81164e663fda5a8d6))
* Remove requirement to have Parse for Dice turned on to use Dice Callbacks ([a8bab50](https://github.com/javalent/fantasy-statblocks/commit/a8bab50c31b46c455c9fb5158a68da9397b9da76))

## [3.15.3](https://github.com/javalent/fantasy-statblocks/compare/3.15.2...3.15.3) (2023-10-16)


### Bug Fixes

* Traits respect inline groups now ([2a4c7b0](https://github.com/javalent/fantasy-statblocks/commit/2a4c7b0ecb8dd8d5f5e178598b44fe9d603acb87))

## [3.15.2](https://github.com/javalent/fantasy-statblocks/compare/3.15.1...3.15.2) (2023-10-13)


### Bug Fixes

* temp fix for not image block modal not opening ([f876bb5](https://github.com/javalent/fantasy-statblocks/commit/f876bb518bcfdcc7e6833ccfb4984afc3d0ca598))

## [3.15.1](https://github.com/javalent/fantasy-statblocks/compare/3.15.0...3.15.1) (2023-10-09)


### Bug Fixes

* action block editor allows saving now ([98929f0](https://github.com/javalent/fantasy-statblocks/commit/98929f08f1c474dcdf878afe3a0167fa833b6a6f))
* Actions will now actually execute ([ece1f43](https://github.com/javalent/fantasy-statblocks/commit/ece1f4339973bb10bab947728c4c2ea24559fed1))
* removed logs ([c348c24](https://github.com/javalent/fantasy-statblocks/commit/c348c2483041858058c1d28efdff21170f20e3bf))

## [3.15.0](https://github.com/javalent/fantasy-statblocks/compare/3.14.0...3.15.0) (2023-10-09)


### Features

* New Action block for layouts enables in-layout buttons ([982a690](https://github.com/javalent/fantasy-statblocks/commit/982a6909270657bcb3367b4fb4d1fdbaf3277101))
* New IT encounter buttons for 5e layout ([b57f315](https://github.com/javalent/fantasy-statblocks/commit/b57f315b3d0e3cc1607bbc95b6d6ca4a82c96dd7))

## [3.14.0](https://github.com/javalent/fantasy-statblocks/compare/3.13.4...3.14.0) (2023-10-08)


### Features

* Enable property callbacks on traits ([e643ae6](https://github.com/javalent/fantasy-statblocks/commit/e643ae6b73df2ca529bf1fd9b7e0da679516c8ca))


### Bug Fixes

* Add bestiary key to included SRD ([95af431](https://github.com/javalent/fantasy-statblocks/commit/95af431d280124570d7fb7a516488f03b0eeb4f3))
* Allow space as a separator for subheadings ([37126dd](https://github.com/javalent/fantasy-statblocks/commit/37126dd1cb738713b02be7d84b71af48cdc7b792))

## [3.13.4](https://github.com/javalent/fantasy-statblocks/compare/3.13.3...3.13.4) (2023-09-30)


### Bug Fixes

* Normalize aliases on startup too ([d850b8f](https://github.com/javalent/fantasy-statblocks/commit/d850b8f406e7c016271cd787af8513293a278b5a))

## [3.13.3](https://github.com/javalent/fantasy-statblocks/compare/3.13.2...3.13.3) (2023-09-30)


### Bug Fixes

* normalize aliases when linkifying spells ([dd79164](https://github.com/javalent/fantasy-statblocks/commit/dd79164856701643b2f160ae3c759c0b16ff3d45))

## [3.13.2](https://github.com/javalent/fantasy-statblocks/compare/3.13.1...3.13.2) (2023-09-28)


### Bug Fixes

* fixes parsing wikilinks out of nested arrays in frontmatter ([f5676c2](https://github.com/javalent/fantasy-statblocks/commit/f5676c251f0076619190840cb5981020d4a09436))
* Fixes table Ability Modifier callback input not being in the collapsible Advanced element ([427a05d](https://github.com/javalent/fantasy-statblocks/commit/427a05d5224d9d343e1d24fc9312881a85962860))

## [3.13.1](https://github.com/javalent/fantasy-statblocks/compare/3.13.0...3.13.1) (2023-09-27)


### Bug Fixes

* lumberjack attack (aka removed logs whoops) ([5cfbcf3](https://github.com/javalent/fantasy-statblocks/commit/5cfbcf3827e448d2ce395fe10945b3fb28056244))

## [3.13.0](https://github.com/javalent/fantasy-statblocks/compare/3.12.2...3.13.0) (2023-09-27)


### Features

* Spells can now also auto-link to aliases of files ([d666d57](https://github.com/javalent/fantasy-statblocks/commit/d666d57b188c5893a9ca6b6f5a9f332ab887e30e))

## [3.12.2](https://github.com/javalent/fantasy-statblocks/compare/3.12.1...3.12.2) (2023-09-21)


### Bug Fixes

* fixes being unable to parse certain save roll syntaxes ([24e1696](https://github.com/javalent/fantasy-statblocks/commit/24e16964b8c35fa6ddcae86c1c815b5145f54599))

## [3.12.1](https://github.com/javalent/fantasy-statblocks/compare/3.12.0...3.12.1) (2023-09-21)


### Bug Fixes

* Fixes incorrect wording in settings ([96e1ead](https://github.com/javalent/fantasy-statblocks/commit/96e1eadb9aff37cba908559010c15114da860bc7))

## [3.12.0](https://github.com/javalent/fantasy-statblocks/compare/3.11.2...3.12.0) (2023-09-18)


### Features

* Enables searching by field in creature pane using `@&lt;field&gt; <search>` ([45760aa](https://github.com/javalent/fantasy-statblocks/commit/45760aa966af6ad4061c45ff27e34d79d65660fe))


### Bug Fixes

* beep boop ([0d942df](https://github.com/javalent/fantasy-statblocks/commit/0d942dfc9da30512faac7982d7838ebb09c62be3))
* Better styling for combatant pane search ([f96297a](https://github.com/javalent/fantasy-statblocks/commit/f96297afad075ab008e2156adbcf76682ed4170b))
* Pass table values through the markdown path ([1be6459](https://github.com/javalent/fantasy-statblocks/commit/1be6459d3b4a18b1afd4f7a9f193249852d1da27))

## [3.11.2](https://github.com/javalent/fantasy-statblocks/compare/3.11.1...3.11.2) (2023-09-18)


### Bug Fixes

* fix issue where nested arrays were sometimes being interpreted as wikilinks ([844e6a6](https://github.com/javalent/fantasy-statblocks/commit/844e6a60d8e0b738cb8fb6660b16058fa54d40a6))

## [3.11.1](https://github.com/javalent/fantasy-statblocks/compare/3.11.0...3.11.1) (2023-09-14)


### Bug Fixes

* Remove single-view restriction on creature pane (close [#274](https://github.com/javalent/fantasy-statblocks/issues/274)) ([7fad139](https://github.com/javalent/fantasy-statblocks/commit/7fad13949367e205614002038e5dc6f431a659b4))

## [3.11.0](https://github.com/javalent/fantasy-statblocks/compare/3.10.0...3.11.0) (2023-09-13)


### Features

* Begin moving towards an API-based approach ([1cfcef8](https://github.com/javalent/fantasy-statblocks/commit/1cfcef8a9fc9e964d008df269f39c7724325003c))


### Bug Fixes

* Restrict creature pane to only creatures in bestiary ([010de61](https://github.com/javalent/fantasy-statblocks/commit/010de612dfe13efb2b1d6dc91365067b55d6ec9f))

## [3.10.0](https://github.com/javalent/fantasy-statblocks/compare/3.9.4...3.10.0) (2023-09-12)


### Features

* New `bestiary` field can be set to false to prevent creature from being exposed in the bestiary. Note that if another creature extends this, you should set `bestiary` to true. ([2ed4c9c](https://github.com/javalent/fantasy-statblocks/commit/2ed4c9cc4ddb2f1927d06ea19385af01dbcfb78d))

## [3.9.4](https://github.com/javalent/fantasy-statblocks/compare/3.9.3...3.9.4) (2023-09-11)


### Bug Fixes

* Respect subheading separator in layouts ([0786e1f](https://github.com/javalent/fantasy-statblocks/commit/0786e1fd17be99b4e66e3b881d6285cb28c08b09))

## [3.9.3](https://github.com/javalent/fantasy-statblocks/compare/3.9.2...3.9.3) (2023-09-01)


### Bug Fixes

* Saves blocks now use the `--statblock-property-name-font-color` css variable ([faf5da7](https://github.com/javalent/fantasy-statblocks/commit/faf5da77b6502b8b628e38abebb598e85a75196e))

## [3.9.2](https://github.com/javalent/fantasy-statblocks/compare/3.9.1...3.9.2) (2023-08-30)


### Bug Fixes

* remove setImmediate so mobile works again ([a2ffe05](https://github.com/javalent/fantasy-statblocks/commit/a2ffe05b744cfd22d53f6fc96e6ee3b9629af4fb))

## [3.9.1](https://github.com/javalent/fantasy-statblocks/compare/3.9.0...3.9.1) (2023-08-30)


### Bug Fixes

* add notice to aid with mobile debugging ([6002832](https://github.com/javalent/fantasy-statblocks/commit/6002832010916d719d6fbad4f77ed1d87a20e937))

## [3.9.0](https://github.com/javalent/fantasy-statblocks/compare/3.8.4...3.9.0) (2023-08-18)


### Features

* Adds a Creature pane with search bar (close [#256](https://github.com/javalent/fantasy-statblocks/issues/256)) ([fca9c5a](https://github.com/javalent/fantasy-statblocks/commit/fca9c5aae69a2127569fc83b9bb330a12c98e3ba))
* New editor suggester that dynamically loads layout fields to suggest properties in code blocks ([0064bfe](https://github.com/javalent/fantasy-statblocks/commit/0064bfe883304fc77eafa498e9847d9d8a83d6bf))


### Bug Fixes

* add bestiary names method to API spec ([7a0c509](https://github.com/javalent/fantasy-statblocks/commit/7a0c509fe593d3af261aa7b5051d8310adc792bf))
* adds fate core css (close [#217](https://github.com/javalent/fantasy-statblocks/issues/217)) ([3ddd501](https://github.com/javalent/fantasy-statblocks/commit/3ddd501c1a6323dd4cc015df3d1b958344b9153d))
* unwrap callout blocks to find traits ([660a657](https://github.com/javalent/fantasy-statblocks/commit/660a657981c25e65125f69d52162ee7d3f608b54))

## [3.8.4](https://github.com/javalent/fantasy-statblocks/compare/3.8.3...3.8.4) (2023-08-15)


### Bug Fixes

* allow for updating default layouts if no changes have been made ([65c7402](https://github.com/javalent/fantasy-statblocks/commit/65c74022862755a8baed91d8f91c91da72e6f5a6))
* show hit_dice if dice roller not available in basic 5e layout ([eeacb9f](https://github.com/javalent/fantasy-statblocks/commit/eeacb9f251ea770e0fe02abb70dcae367dc7966d))

## [3.8.3](https://github.com/javalent/fantasy-statblocks/compare/3.8.2...3.8.3) (2023-08-14)


### Bug Fixes

* Extended/saved creatures can now remove traits ([a5a0141](https://github.com/javalent/fantasy-statblocks/commit/a5a014145b58d79598e49c2592ccfc63cedaa00d))
* fixes deletion of default layouts ([06f33d9](https://github.com/javalent/fantasy-statblocks/commit/06f33d99ff192a85826e121be2089df186ce4226))
* re-enable array-based traits ([ff31008](https://github.com/javalent/fantasy-statblocks/commit/ff31008e4aac3242dfed068f90bdb371fef2b3f8))

## [3.8.2](https://github.com/javalent/fantasy-statblocks/compare/3.8.1...3.8.2) (2023-08-14)


### Bug Fixes

* fixes saves / skillsaves not appearing ([98f79ab](https://github.com/javalent/fantasy-statblocks/commit/98f79abd9c5749b060f2374bcbf7c0f6a1a58c81))

## [3.8.1](https://github.com/javalent/fantasy-statblocks/compare/3.8.0...3.8.1) (2023-08-13)


### Bug Fixes

* fixes removing traits not working unless key is present ([1f3c8c1](https://github.com/javalent/fantasy-statblocks/commit/1f3c8c1ec4e20a7eb3cb5ec9bdbca545ef16d665))
* fixes table css class interference (close [#230](https://github.com/javalent/fantasy-statblocks/issues/230)) ([a93264c](https://github.com/javalent/fantasy-statblocks/commit/a93264c02b2ebafc026af0dbf83c0e7932c5c887))

## [3.8.0](https://github.com/javalent/fantasy-statblocks/compare/3.8.0-b1...3.8.0) (2023-08-13)


### Features

* Adds layout suggestor (close [#226](https://github.com/javalent/fantasy-statblocks/issues/226)) ([cf568d8](https://github.com/javalent/fantasy-statblocks/commit/cf568d809d50872b94d93d4285948644a24ade90))


### Bug Fixes

* Creature notes no longer overwrite codeblock parameters (close [#243](https://github.com/javalent/fantasy-statblocks/issues/243)) ([78fa44e](https://github.com/javalent/fantasy-statblocks/commit/78fa44ec10da203df97b329fddf232803ca08bae))
* creatures always show prop if not redefined, re-implement saves addition ([1bc9945](https://github.com/javalent/fantasy-statblocks/commit/1bc9945fc5d7d84d6c43404bd3dfb2ae58087cab))
* Fixes additive string properties ([33b1a44](https://github.com/javalent/fantasy-statblocks/commit/33b1a44f25bfbd6d2d9972cccd773afd0d9a8a05))


### Miscellaneous Chores

* release 3.8.0 ([5d0f1c2](https://github.com/javalent/fantasy-statblocks/commit/5d0f1c2f537d1fecb60b6a9b02f964864a20069f))

## [3.8.0-b1](https://github.com/javalent/fantasy-statblocks/compare/3.6.7...3.8.0-b1) (2023-08-12)


### Bug Fixes

* Rewrite how traits are combined ([4685365](https://github.com/javalent/fantasy-statblocks/commit/4685365f045621a3d9fc4c32a9e6433e2e51edc0))


### Miscellaneous Chores

* release 3.8.0-b1 ([1b3aad7](https://github.com/javalent/fantasy-statblocks/commit/1b3aad7fe670c124e5195f491f1568bb835a9123))

## [3.6.7](https://github.com/javalent/fantasy-statblocks/compare/3.6.6...3.6.7) (2023-07-04)


### Bug Fixes

* basic 5e layout now shows 10xp for 0cr creatures ([e6e9bb3](https://github.com/javalent/fantasy-statblocks/commit/e6e9bb3fde33bad21ef67f90a8433b47535274b2))

## [3.6.6](https://github.com/javalent/fantasy-statblocks/compare/3.6.5...3.6.6) (2023-06-29)


### Bug Fixes

* solves the bug that inhibits the property to be fully dice parsed ([#237](https://github.com/javalent/fantasy-statblocks/issues/237)) ([27cf649](https://github.com/javalent/fantasy-statblocks/commit/27cf6498590c714cc8905cbae39e29714571943a))

## [3.6.5](https://github.com/javalent/fantasy-statblocks/compare/3.6.4...3.6.5) (2023-05-13)


### Bug Fixes

* Fixes custom trait duplication (close [#222](https://github.com/javalent/fantasy-statblocks/issues/222)) ([a281d5b](https://github.com/javalent/fantasy-statblocks/commit/a281d5b034af9357f967c8afd2397a36a43770fd))

## [3.6.4](https://github.com/javalent/fantasy-statblocks/compare/3.6.3...3.6.4) (2023-05-10)


### Bug Fixes

* Fix empty spells properties ([ab4d9b3](https://github.com/javalent/fantasy-statblocks/commit/ab4d9b3fb4bd11e9ba71b1b5675494d9c43fa06d))
* fixes crash when no statblock elements are created ([b2156fb](https://github.com/javalent/fantasy-statblocks/commit/b2156fb08469b79bca5c351f5fbcb0c31ed47c9e))
* Spells blocks can now be linked to properties ([1b37258](https://github.com/javalent/fantasy-statblocks/commit/1b37258c02fefcbe5460ab2a4ed232fa31b65192))

## [3.6.3](https://github.com/javalent/fantasy-statblocks/compare/3.6.2...3.6.3) (2023-05-05)


### Bug Fixes

* expose bestiary in API ([7de02d3](https://github.com/javalent/fantasy-statblocks/commit/7de02d3c6f06a633db914098eed1ecf5565480a8))

## [3.6.2](https://github.com/javalent/fantasy-statblocks/compare/3.6.1...3.6.2) (2023-05-02)


### Bug Fixes

* fixes render function overwriting creature ([94a8a0a](https://github.com/javalent/fantasy-statblocks/commit/94a8a0a1a27f3fef936945b62072448aefd0a65a))

## [3.6.1](https://github.com/javalent/fantasy-statblocks/compare/3.6.0...3.6.1) (2023-04-30)


### Bug Fixes

* fixes styling leaking to all links (close [#210](https://github.com/javalent/fantasy-statblocks/issues/210)) ([fde0ead](https://github.com/javalent/fantasy-statblocks/commit/fde0ead0a7fc7a8db8ab963c2ccf7ded24ea6fa4))

## [3.6.0](https://github.com/javalent/fantasy-statblocks/compare/3.5.12...3.6.0) (2023-04-28)


### Features

* Create a 13th Age monster layout ([#206](https://github.com/javalent/fantasy-statblocks/issues/206)) ([bafb2a0](https://github.com/javalent/fantasy-statblocks/commit/bafb2a04effb8634a705089117d8cf5dae947448))

## [3.5.12](https://github.com/javalent/fantasy-statblocks/compare/3.5.11...3.5.12) (2023-04-28)


### Bug Fixes

* PF2e popover fix ([c7ebb18](https://github.com/javalent/fantasy-statblocks/commit/c7ebb18df512ae65f261c1163f2e964a56696164))

## [3.5.11](https://github.com/javalent/fantasy-statblocks/compare/3.5.10...3.5.11) (2023-04-27)


### Bug Fixes

* Notify ObsidianTTRPG channel of releases ([d00b1bf](https://github.com/javalent/fantasy-statblocks/commit/d00b1bfaa29d445ab1b7208bb0b3fea3ee89e97b))

## [3.5.10](https://github.com/javalent/fantasy-statblocks/compare/3.5.9...3.5.10) (2023-04-25)


### Bug Fixes

* remove logs ([7eebc67](https://github.com/javalent/fantasy-statblocks/commit/7eebc67fed26def762f9790b40b8aede8ad1ee44))
* remove ttrp ([59dd7a3](https://github.com/javalent/fantasy-statblocks/commit/59dd7a37fe4ffd6c8072a3fc05b752ba283cc3cc))
* Use new Dice Roller API hook to commonize dice strings ([6798f78](https://github.com/javalent/fantasy-statblocks/commit/6798f780bedd3245f8bc58e960d542bc2ce34606))

## [3.5.9](https://github.com/javalent/fantasy-statblocks/compare/3.5.8...3.5.9) (2023-04-24)


### Bug Fixes

* fancy new discord notifications ([737c8fe](https://github.com/javalent/fantasy-statblocks/commit/737c8fe3393d8dfc906cc1de4a058179bf2d62d9))

## [3.5.8](https://github.com/javalent/fantasy-statblocks/compare/3.5.7...3.5.8) (2023-04-24)


### Bug Fixes

* add repo Update release-please.yml ([1383431](https://github.com/javalent/fantasy-statblocks/commit/1383431ca78f7a6c741a79ecf4fafe78853ab753))

## [3.5.7](https://github.com/javalent/fantasy-statblocks/compare/3.5.6...3.5.7) (2023-04-24)


### Bug Fixes

* test ([90830d6](https://github.com/javalent/fantasy-statblocks/commit/90830d6eb26d928aeefb6162ca342a7ea88e45cf))

## [3.5.6](https://github.com/javalent/fantasy-statblocks/compare/3.5.5...3.5.6) (2023-04-24)


### Bug Fixes

* testing release webhook ([2ca8374](https://github.com/javalent/fantasy-statblocks/commit/2ca83748ee359bdc0ad20df8d3faa6df5a68be38))
* testing release webhook 2 ([1183543](https://github.com/javalent/fantasy-statblocks/commit/1183543d8ba3f66275a7f6a9c3589ec3f2313981))

## [3.5.5](https://github.com/javalent/fantasy-statblocks/compare/3.5.4...3.5.5) (2023-04-22)


### Bug Fixes

* adds new bestiary api hooks ([c395ab8](https://github.com/javalent/fantasy-statblocks/commit/c395ab8f32aa6d2fc6d0217490c02adc32cbf402))
* YAML parsing respects monster key (close [#191](https://github.com/javalent/fantasy-statblocks/issues/191)) ([78eaf40](https://github.com/javalent/fantasy-statblocks/commit/78eaf4042d8f0ae75b2977f89045e4944eaff154))

## [3.5.4](https://github.com/javalent/fantasy-statblocks/compare/3.5.3...3.5.4) (2023-04-20)


### Bug Fixes

* fixes tsconfig ([ba26704](https://github.com/javalent/fantasy-statblocks/commit/ba267046afbf9148b1861d85d2038f3eebb6ee37))

## [3.5.3](https://github.com/javalent/fantasy-statblocks/compare/3.5.2...3.5.3) (2023-04-20)


### Bug Fixes

* re-add lock ([5df2898](https://github.com/javalent/fantasy-statblocks/commit/5df289879aace49246dfc11e05f94402e684cb21))

## [3.5.2](https://github.com/javalent/fantasy-statblocks/compare/3.5.1...3.5.2) (2023-04-20)


### Bug Fixes

* fixes overload ([acd305d](https://github.com/javalent/fantasy-statblocks/commit/acd305d4dc31e5d84116d7aa4b81cc6f6681d25f))

## [3.5.1](https://github.com/javalent/fantasy-statblocks/compare/3.5.0...3.5.1) (2023-04-20)


### Bug Fixes

* fixes release target branch ([c477fe5](https://github.com/javalent/fantasy-statblocks/commit/c477fe5d90a2a30b69dce3061b953f0484592dcc))

## [3.5.0](https://github.com/javalent/fantasy-statblocks/compare/3.4.2...3.5.0) (2023-04-20)


### Features

* npm release ([78016ea](https://github.com/javalent/fantasy-statblocks/commit/78016ea8e5154ed1115fa83e0978039b94c214f9))


### Bug Fixes

* fixes release, name change ([bae38ed](https://github.com/javalent/fantasy-statblocks/commit/bae38ed33ac961d61db16e94adae22d16f222a52))

## [3.4.2](https://github.com/valentine195/fantasy-statblocks/compare/3.4.0...3.4.2) (2023-04-20)


### Bug Fixes

* fix trait overriding ([8ba0773](https://github.com/valentine195/fantasy-statblocks/commit/8ba0773fdfb662f9c392c74a44b94a9f58d7aeca))
* fixes image rendering (close [#177](https://github.com/valentine195/fantasy-statblocks/issues/177)) ([f5aa7af](https://github.com/valentine195/fantasy-statblocks/commit/f5aa7af974f1fd6b5e66a544aa76217acf440b1a))


### Miscellaneous Chores

* release 2.0.0 ([53779ef](https://github.com/valentine195/fantasy-statblocks/commit/53779ef133fa051e2301408edd4fc5658fb99c74))
* release 3.4.2 ([8450774](https://github.com/valentine195/fantasy-statblocks/commit/8450774eb70b4e056c6d931a6e5bf8d4051be29a))

## [3.4.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.3.0...3.4.0) (2023-04-18)


### Features

* Can now specify a css class to apply to every nested element inside a group container (close [#173](https://github.com/valentine195/obsidian-5e-statblocks/issues/173)) ([3c5509c](https://github.com/valentine195/obsidian-5e-statblocks/commit/3c5509c681b2ec364d0549f4ec961ff5e0310923))
* Traits are now nestable (close [#174](https://github.com/valentine195/obsidian-5e-statblocks/issues/174)) ([d4ad0b4](https://github.com/valentine195/obsidian-5e-statblocks/commit/d4ad0b49088a9f01527683a9a241e7c91ef4b535))


### Bug Fixes

* Fix minimum CR XP (close [#92](https://github.com/valentine195/obsidian-5e-statblocks/issues/92)) ([2a88d4e](https://github.com/valentine195/obsidian-5e-statblocks/commit/2a88d4edf85e57ee32d47b82b53ff8cc262da94b))

## [3.3.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.2.2...3.3.0) (2023-04-17)


### Features

* Adds in ability to override Spellcasting trait name (close [#138](https://github.com/valentine195/obsidian-5e-statblocks/issues/138)) ([c9bc086](https://github.com/valentine195/obsidian-5e-statblocks/commit/c9bc086955c8f2c48dfdcf468021842c6ce49cd4))


### Bug Fixes

* Fix spellcasting not looking at provided monster property ([0a2d654](https://github.com/valentine195/obsidian-5e-statblocks/commit/0a2d6545e09e6beacff8340cf36e549025e71987))
* logs oops ([257bf4e](https://github.com/valentine195/obsidian-5e-statblocks/commit/257bf4ecd5116d9e1d089b13476016dd1fe76a98))

### [3.2.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.2.1...3.2.2) (2023-04-17)


### Bug Fixes

* adds link italics css variable ([4c8050c](https://github.com/valentine195/obsidian-5e-statblocks/commit/4c8050c582a1f07cf6db1efa2d4496797a611094))
* Fixes spell itaclis ([#148](https://github.com/valentine195/obsidian-5e-statblocks/issues/148)) ([022f7dc](https://github.com/valentine195/obsidian-5e-statblocks/commit/022f7dc844665fdecfd489f0051bed0942205764))
* Fixes subsequent paragraph display in markdown holders ([#148](https://github.com/valentine195/obsidian-5e-statblocks/issues/148)) ([471e7da](https://github.com/valentine195/obsidian-5e-statblocks/commit/471e7da9493b94737fb9f839f160ab6c5a545e86))
* removes double newlines in SRD ([09fa166](https://github.com/valentine195/obsidian-5e-statblocks/commit/09fa166399b0016c862ef7245452313172335be6))

### [3.2.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.2.0...3.2.1) (2023-04-17)


### Bug Fixes

* default layout resets correct layout (close [#172](https://github.com/valentine195/obsidian-5e-statblocks/issues/172)) ([fe3a6b9](https://github.com/valentine195/obsidian-5e-statblocks/commit/fe3a6b96fb587ea7ce723fddd3286189f0af472a))

## [3.2.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.1.8...3.2.0) (2023-04-14)


### Features

* Adds ability to append to properties by specifing `property+` in a codeblock ([d84b872](https://github.com/valentine195/obsidian-5e-statblocks/commit/d84b872207938a58cf81ef7587c3e0f8a1551267))


### Bug Fixes

* Fixes transforming of traits to overwrite existing traits (close [#156](https://github.com/valentine195/obsidian-5e-statblocks/issues/156)) ([ed40a70](https://github.com/valentine195/obsidian-5e-statblocks/commit/ed40a70ad37ab211efc0f0f7a791c43297c1c46f))

### [3.1.7](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.1.6...3.1.7) (2023-04-13)

### Bug Fixes

* Fixes critical vulnerabilities related to the xmldom package @ryansobol [PR 158](https://github.com/valentine195/obsidian-5e-statblocks/commit/ec892fb76e24f1e94448f163a89701702aa5b992)

### [3.1.6](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.1.5...3.1.6) (2023-04-08)

### [3.1.5](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.1.4...3.1.5) (2023-04-07)


### Bug Fixes

* watcher more intelligently chooses files to parse ([424f11f](https://github.com/valentine195/obsidian-5e-statblocks/commit/424f11f2b8df0b0ab39d2902cbd485f51f151fea))

### [3.1.4](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.1.3...3.1.4) (2023-04-06)


### Bug Fixes

* fixes slugify removing valid characters ([7769127](https://github.com/valentine195/obsidian-5e-statblocks/commit/7769127f92580bc85917cb8385370770fa90874d))

### [3.1.3](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.1.2...3.1.3) (2023-03-31)


### Bug Fixes

* add option to disable CSS class adding of property names ([c707c3c](https://github.com/valentine195/obsidian-5e-statblocks/commit/c707c3cd5db1194c74f3de06514d4478d56a9d96))

### [3.1.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.1.1...3.1.2) (2023-03-23)


### Bug Fixes

* ensure text is stringified ([d953ebb](https://github.com/valentine195/obsidian-5e-statblocks/commit/d953ebb6023e5910200fd9c38078227de7819c72))

### [3.1.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.1.0...3.1.1) (2023-03-23)


### Bug Fixes

* no longer delete when canceling delete modal (close [#155](https://github.com/valentine195/obsidian-5e-statblocks/issues/155)) ([5b190ab](https://github.com/valentine195/obsidian-5e-statblocks/commit/5b190ab8201c01d4aca288e19b176ae673f5d208))
* will now look at sub-properties for generic importing ([db5bd9a](https://github.com/valentine195/obsidian-5e-statblocks/commit/db5bd9a1db5953123687817cd707b7752e4d2743))

## [3.1.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.0.3...3.1.0) (2023-03-23)


### Features

* Adds new Generic JSON Importer ([049d09f](https://github.com/valentine195/obsidian-5e-statblocks/commit/049d09fa5fe8f442a4a0369d766c99cc6cf5ed8d))


### Bug Fixes

* Adds setting to disable atomic writing ([3b02b7f](https://github.com/valentine195/obsidian-5e-statblocks/commit/3b02b7fc14a58fc9271834215bd9349ebadef984))
* update to use new Dice Roller API ([07cedb5](https://github.com/valentine195/obsidian-5e-statblocks/commit/07cedb5c008e97f4bb3218c82d6b9429ba30d1a7))

### [3.0.3](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.0.2...3.0.3) (2023-03-23)


### Bug Fixes

* fixes crashing out when trying to load temp.json ([371725a](https://github.com/valentine195/obsidian-5e-statblocks/commit/371725afc78e7f4dc2d63af8e66ca6d282f78071))

### [3.0.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.0.1...3.0.2) (2023-03-17)


### Bug Fixes

* Add heading to group type and make legendary actions a group ([#152](https://github.com/valentine195/obsidian-5e-statblocks/issues/152)) ([199c94d](https://github.com/valentine195/obsidian-5e-statblocks/commit/199c94db5caf1656480f34122cfdbb91c0266a78))
* fixes default layout editing ([8d89d3e](https://github.com/valentine195/obsidian-5e-statblocks/commit/8d89d3ecc471a3d86d72fa3c7faad54b9330e2bd))

### [3.0.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/3.0.0...3.0.1) (2023-03-14)


### Bug Fixes

* fixes space after link ([8aa3627](https://github.com/valentine195/obsidian-5e-statblocks/commit/8aa3627fe28a5ba4f939c9127d78a1251251c5ac))

## [3.0.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.28.11...3.0.0) (2023-03-09)


### ⚠ BREAKING CHANGES

* Atomic saving of data file to prevent data loss
* Adds Layout block to nest layouts inside other layouts
* includes PF2e as basic layout
* support for editable default layouts

### Features

* Adds Layout block to nest layouts inside other layouts ([41615a2](https://github.com/valentine195/obsidian-5e-statblocks/commit/41615a282cfc5a15788634d6b92432a9ca28a1b8))
* Atomic saving of data file to prevent data loss ([e09ad9c](https://github.com/valentine195/obsidian-5e-statblocks/commit/e09ad9c377df5799978ef46b4e0a58cff7d5aa8a))
* includes PF2e as basic layout ([b7981bc](https://github.com/valentine195/obsidian-5e-statblocks/commit/b7981bcd3b7139a8217fefff3b55c9ad86205452))
* support for editable default layouts ([4cb1788](https://github.com/valentine195/obsidian-5e-statblocks/commit/4cb1788f4bb8810101cf4c9b405e5026ad559c49))

### [2.28.11](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.28.10...2.28.11) (2023-03-09)


### Bug Fixes

* fixes temp content column css inheritance ([5a7eec9](https://github.com/valentine195/obsidian-5e-statblocks/commit/5a7eec97e72870295ecee387351d60b2217d54d0))

### [2.28.10](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.28.9...2.28.10) (2023-03-09)


### Bug Fixes

* make column filling a little smarter ([624a883](https://github.com/valentine195/obsidian-5e-statblocks/commit/624a8830084ce15c550d9f35431926b461fa755c))

### [2.28.9](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.28.8...2.28.9) (2023-03-09)


### Bug Fixes

* Trait headers & subheading text are attached to the first trait block now ([6349dc4](https://github.com/valentine195/obsidian-5e-statblocks/commit/6349dc4df1e5089479f25d1eed5eb64f4eb0c716))

### [2.28.8](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.28.7...2.28.8) (2023-03-08)


### Bug Fixes

* Enables multi-entry tables by passing an array of arrays ([9c71521](https://github.com/valentine195/obsidian-5e-statblocks/commit/9c715219007d2f9655f9e30c59a2336af4c7a5df))

### [2.28.7](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.28.6...2.28.7) (2023-03-07)


### Bug Fixes

* Actually fixes font-size rendering issue ([7ae4005](https://github.com/valentine195/obsidian-5e-statblocks/commit/7ae40056b4fb79089b1d1ec53fd44dedfd574f3b))

### [2.28.6](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.28.5...2.28.6) (2023-03-07)


### Bug Fixes

* removes debugger double whoops ([7cacd73](https://github.com/valentine195/obsidian-5e-statblocks/commit/7cacd73ccf400426ecfc049df01a9a5af40c588c))

### [2.28.5](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.28.4...2.28.5) (2023-03-07)


### Bug Fixes

* Fixes CSS debug WHOOPS ([8861567](https://github.com/valentine195/obsidian-5e-statblocks/commit/8861567ff99b3987676ec8f01c90fda9b5e1abbb))

### [2.28.4](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.28.3...2.28.4) (2023-03-07)


### Bug Fixes

* fixes Table modifier calculation, improves editor styling ([d5fbee5](https://github.com/valentine195/obsidian-5e-statblocks/commit/d5fbee5a2d44b21f9edfb41f56562881899a8993))
* Massively improves column rendering ([33037af](https://github.com/valentine195/obsidian-5e-statblocks/commit/33037af12a00553ec7850f56ef67d73ec1bbfb14))

### [2.28.3](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.28.2...2.28.3) (2023-03-06)


### Bug Fixes

* adds ability to set Trait subheading text blocks ([184b351](https://github.com/valentine195/obsidian-5e-statblocks/commit/184b351aacd806ab4c9b306e4ede78282c97b5b5))
* imports Mythic Actions from 5e.tools ([750e1bc](https://github.com/valentine195/obsidian-5e-statblocks/commit/750e1bcce31a4e3b2a1018d2fa49713c9d73ac39))

### [2.28.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.28.1...2.28.2) (2023-03-06)


### Bug Fixes

* fixes monster source when saving if source is present ([4c39218](https://github.com/valentine195/obsidian-5e-statblocks/commit/4c392183614f31be1d9be2c934795116f4334e8b))

### [2.28.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.28.0...2.28.1) (2023-03-06)


### Bug Fixes

* fixes bug if no html element was returned in JS block ([55f01bc](https://github.com/valentine195/obsidian-5e-statblocks/commit/55f01bc454828be7859a6af18de82feab1d5aaa8))

## [2.28.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.27.1...2.28.0) (2023-03-06)


### Features

* Adds JavaScript block ([4ed12ec](https://github.com/valentine195/obsidian-5e-statblocks/commit/4ed12ec04d99ebc869c3c543012027498623bc9a))

### [2.27.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.27.0...2.27.1) (2023-03-06)


### Bug Fixes

* adds ability to start collapse block opened ([9a1b9af](https://github.com/valentine195/obsidian-5e-statblocks/commit/9a1b9af8f436d7e7d3dc5d34a761d9ccd35ad7e9))
* fixes collapse handle variable ([8010cb6](https://github.com/valentine195/obsidian-5e-statblocks/commit/8010cb677ee6b7d542a0b46beca0d947e776a3b7))

## [2.27.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.26.5...2.27.0) (2023-03-04)


### Features

* adds new IfElse block, new Collapse block ([66fad70](https://github.com/valentine195/obsidian-5e-statblocks/commit/66fad70e092e8004df3a6e49bc00d42dc6a05240))


### Bug Fixes

* fixes rendering of links (close [#151](https://github.com/valentine195/obsidian-5e-statblocks/issues/151), close [#149](https://github.com/valentine195/obsidian-5e-statblocks/issues/149)) ([161d113](https://github.com/valentine195/obsidian-5e-statblocks/commit/161d1134b648cd2f5a0166d18fdfe53b7d56968e))

### [2.26.5](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.26.4...2.26.5) (2023-03-02)

### [2.26.4](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.25.4...2.26.4) (2023-03-02)


### Bug Fixes

* adds collapsible block ([ea6b8d5](https://github.com/valentine195/obsidian-5e-statblocks/commit/ea6b8d5d20794a7e214c08e6ad9eabda74e97406))
* fixes link replacing in extended creatures (close [#149](https://github.com/valentine195/obsidian-5e-statblocks/issues/149)) ([b7799f7](https://github.com/valentine195/obsidian-5e-statblocks/commit/b7799f76ccac7db13d98d8aa71eb555d209172df))
* usability fixes ([e4918af](https://github.com/valentine195/obsidian-5e-statblocks/commit/e4918af179d6ab11a2859807891d7930a09f362a))

### [2.26.3](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.25.4...2.26.3) (2023-02-26)


### Bug Fixes

* adds collapsible block ([ea6b8d5](https://github.com/valentine195/obsidian-5e-statblocks/commit/ea6b8d5d20794a7e214c08e6ad9eabda74e97406))
* usability fixes ([e4918af](https://github.com/valentine195/obsidian-5e-statblocks/commit/e4918af179d6ab11a2859807891d7930a09f362a))

### [2.26.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.25.4...2.26.2) (2023-02-24)


### Bug Fixes

* usability fixes ([e4918af](https://github.com/valentine195/obsidian-5e-statblocks/commit/e4918af179d6ab11a2859807891d7930a09f362a))

### [2.25.4](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.26.0...2.25.4) (2023-02-24)


### Bug Fixes

* calls onResize immediately instead of setColumns to prevent not displaying if a width can't be found ([e6b163d](https://github.com/valentine195/obsidian-5e-statblocks/commit/e6b163d42cfab861947f6934e26e225a1a5e2a49))
* can no longer remove if/else group ([117764c](https://github.com/valentine195/obsidian-5e-statblocks/commit/117764c9d9d2584a2ec05c0e35ecec7553858d94))

### [2.26.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.26.0...2.26.1) (2023-02-23)


### Bug Fixes

* can no longer remove if/else group ([117764c](https://github.com/valentine195/obsidian-5e-statblocks/commit/117764c9d9d2584a2ec05c0e35ecec7553858d94))

## [2.26.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.25.3...2.26.0) (2023-02-23)


### Features

* adds if/else block ([06590d4](https://github.com/valentine195/obsidian-5e-statblocks/commit/06590d4a8b7ac01c8881c467259c84ea6f2e862e))

### [2.25.3](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.25.2...2.25.3) (2023-02-22)


### Bug Fixes

* fixes inline overflow in layout creator ([0285716](https://github.com/valentine195/obsidian-5e-statblocks/commit/02857160f28af2d65176a48817b5ec9ab71eb89e))

### [2.25.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.25.1...2.25.2) (2023-02-16)


### Bug Fixes

* removes parens after dice roll for new dice roller setting ([fdbf30a](https://github.com/valentine195/obsidian-5e-statblocks/commit/fdbf30aad1b5acd5d072ce8f4e08d2186caa0592))

### [2.25.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.25.0...2.25.1) (2023-02-13)


### Bug Fixes

* null check settings ([5d0f4d4](https://github.com/valentine195/obsidian-5e-statblocks/commit/5d0f4d4814e021ce0078f08eeb58f707df447e5a))

## [2.25.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.22...2.25.0) (2023-02-13)


### Features

* Rename to Fantasy Statblocks ([e624b37](https://github.com/valentine195/obsidian-5e-statblocks/commit/e624b37ad5058ad55f104c2644ce5dcbef2e2980))

### [2.24.22](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.21...2.24.22) (2023-02-12)


### Bug Fixes

* remove menu unload... ([4ca990c](https://github.com/valentine195/obsidian-5e-statblocks/commit/4ca990c664fc07a593de02f74ca4211f527267e5))

### [2.24.21](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.20...2.24.21) (2023-02-12)


### Bug Fixes

* fixes extends (close [#140](https://github.com/valentine195/obsidian-5e-statblocks/issues/140)) ([806ed76](https://github.com/valentine195/obsidian-5e-statblocks/commit/806ed769cb6ee3ae1b91e14f1a733a58a14b4eb8))

### [2.24.20](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.19...2.24.20) (2023-02-08)


### Bug Fixes

* fixes issue where blank named traits won't display ([e4c26da](https://github.com/valentine195/obsidian-5e-statblocks/commit/e4c26daa2317bebe36302e21e7354e6dbd028849))

### [2.24.19](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.18...2.24.19) (2023-02-04)


### Bug Fixes

* fixes spacing issue related to dice (close [#135](https://github.com/valentine195/obsidian-5e-statblocks/issues/135)) ([5d478b9](https://github.com/valentine195/obsidian-5e-statblocks/commit/5d478b94368a7b56460cbac12bea781737d40ea0))
* switch to round down (close [#134](https://github.com/valentine195/obsidian-5e-statblocks/issues/134)) ([51b5f4f](https://github.com/valentine195/obsidian-5e-statblocks/commit/51b5f4f033a54b8864c6955187691c34a288144b))

### [2.24.18](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.17...2.24.18) (2023-02-04)


### Bug Fixes

* fixes saving issue ([d6523ff](https://github.com/valentine195/obsidian-5e-statblocks/commit/d6523ffbaa64ead7dff6d06365ad2cc7aec4eba4))

### [2.24.17](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.16...2.24.17) (2023-02-03)


### Bug Fixes

* fixes layout creator straight up not working ([2e80267](https://github.com/valentine195/obsidian-5e-statblocks/commit/2e80267d4088c8f42094bc84348263571db96a4d))

### [2.24.16](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.15...2.24.16) (2023-02-02)


### Bug Fixes

* fixes backwards compat with trait array syntax ([5580d6a](https://github.com/valentine195/obsidian-5e-statblocks/commit/5580d6ae626e08b7dd1a5f3189c070f30d3ed8f9))

### [2.24.15](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.14...2.24.15) (2023-02-02)


### Bug Fixes

* accidentally broke everything lol whoops ([319e141](https://github.com/valentine195/obsidian-5e-statblocks/commit/319e141684bb22eb06b30c03ee207fcef1616d67))

### [2.24.14](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.13...2.24.14) (2023-02-01)


### Bug Fixes

* fixes issue with yaml parsing & transforming saves blocks ([584256f](https://github.com/valentine195/obsidian-5e-statblocks/commit/584256f458cefb64ffb1adff314632ac9924d5a4))

### [2.24.13](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.12...2.24.13) (2023-01-30)


### Bug Fixes

* saves now takes an object or array ([39f5c9d](https://github.com/valentine195/obsidian-5e-statblocks/commit/39f5c9d1560a016f88d2fe10dc7529723a9f26c3))
* stats now takes any value (no modifier will be calculated for non-number values) ([f10c95d](https://github.com/valentine195/obsidian-5e-statblocks/commit/f10c95dc09912ce434fc3d1c5fb22b21d36d4fca))

### [2.24.12](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.11...2.24.12) (2023-01-28)


### Bug Fixes

* adds block type to container class ([dee0653](https://github.com/valentine195/obsidian-5e-statblocks/commit/dee0653079305f8ab40ed9274b9952f2835ba991))

### [2.24.11](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.10...2.24.11) (2023-01-27)


### Bug Fixes

* adds trait property to Traits block class ([d91bccc](https://github.com/valentine195/obsidian-5e-statblocks/commit/d91bcccfea31f4f36beb23face1171006cefe173))

### [2.24.10](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.9...2.24.10) (2023-01-27)


### Bug Fixes

* fixes group container duplication ([01e03b0](https://github.com/valentine195/obsidian-5e-statblocks/commit/01e03b06ad1467ed3071df5ed96c9feda4ec21ae))
* traits now get their slugified name as a class ([3dd1649](https://github.com/valentine195/obsidian-5e-statblocks/commit/3dd1649c76afa3203776aa59648db227e3f063ef))

### [2.24.7](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.6...2.24.7) (2023-01-23)


### Bug Fixes

* fixes issue with default fate core aspects header ([1e768b0](https://github.com/valentine195/obsidian-5e-statblocks/commit/1e768b0025020b05d9038d55177bf5ea4217d802))
* removes layouts getter modifications ([22fc116](https://github.com/valentine195/obsidian-5e-statblocks/commit/22fc1161bac16c8b6992a7129dd042665ea70e30))

### [2.24.6](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.5...2.24.6) (2023-01-23)


### Bug Fixes

* fixes default layouts being ignored ([2fef682](https://github.com/valentine195/obsidian-5e-statblocks/commit/2fef68216d77a3dd72ab58ab4487e5e8d9e19d91))

### [2.24.5](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.4...2.24.5) (2023-01-20)


### Bug Fixes

* fixes dice roll parsing in markdown block ([2fe1199](https://github.com/valentine195/obsidian-5e-statblocks/commit/2fe1199267efb2ab45ae96cc5629d4f2cacb58c8))
* removes warning about markdown and dice combo ([b3b38ac](https://github.com/valentine195/obsidian-5e-statblocks/commit/b3b38ac185c418476a8ba6a858d28cc00ab1ca66))

### [2.24.4](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.3...2.24.4) (2023-01-16)


### Bug Fixes

* fixes for dice roller markdown parsing ([6bcd12b](https://github.com/valentine195/obsidian-5e-statblocks/commit/6bcd12b145339967b6c9266c1806764062d0eece))

### [2.24.3](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.2...2.24.3) (2023-01-13)


### Bug Fixes

* fixes issue with markdown dice rollers of the same formula ([d494808](https://github.com/valentine195/obsidian-5e-statblocks/commit/d494808a6a2cd5ef7a663a40cbe1626bc1dccb6a))

### [2.24.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.1...2.24.2) (2023-01-13)


### Bug Fixes

* layout blocks now show if they're markdown enabled ([8670ee1](https://github.com/valentine195/obsidian-5e-statblocks/commit/8670ee14fbe1364a0451dabd7f09b2c5c093513f))
* markdown enabled blocks can now scan for dice rolls ([a871269](https://github.com/valentine195/obsidian-5e-statblocks/commit/a871269ab0637c70d270fcdeeece30dbabe17776))

### [2.24.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.24.0...2.24.1) (2023-01-11)


### Bug Fixes

* fixes issue rendering dice rollers in initiative tracker view ([1d1274d](https://github.com/valentine195/obsidian-5e-statblocks/commit/1d1274dbce36f69a8cadb670d9f3107c2c7ee7a0))

## [2.24.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.23.6...2.24.0) (2023-01-10)


### Features

* Adds header size property to Heading blocks in custom layouts ([9f95492](https://github.com/valentine195/obsidian-5e-statblocks/commit/9f95492400777ac76500f7f57c1578a4367bcc70))

### [2.23.6](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.23.5...2.23.6) (2023-01-07)

### Features

* Adds support for automatically parsing inline statblocks (thanks dcorbin) ([PR 112](https://github.com/valentine195/obsidian-5e-statblocks/commit/611886db58287ee6050093a5643d1550bc9e4989))

### Bug Fixes

* fixes monsters not showing up immediately in settings ([4cc8e93](https://github.com/valentine195/obsidian-5e-statblocks/commit/4cc8e93cd4d7d5dbcbcdf582572343582d48e490))

### [2.23.3](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.23.2...2.23.3) (2022-12-07)


### Bug Fixes

* fixes dropzone inheritance issue ([8e10905](https://github.com/valentine195/obsidian-5e-statblocks/commit/8e1090511e02cb21067cee26a321430d2ed2f5db))

### [2.23.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.23.1...2.23.2) (2022-12-06)


### Bug Fixes

* improves subheading editing experience ([7764e51](https://github.com/valentine195/obsidian-5e-statblocks/commit/7764e5107c71edf1217b0eb814c1494594917dda))
* removes logs ([6b0d7ea](https://github.com/valentine195/obsidian-5e-statblocks/commit/6b0d7ea14aa3a540346d034500219b2cd7a9a063))

### [2.23.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.23.0...2.23.1) (2022-12-06)


### Bug Fixes

* empty inline groups easier to drop ([20744a0](https://github.com/valentine195/obsidian-5e-statblocks/commit/20744a036864117dad50bc4a3242137ee5ee0bdf))
* fixes nested conditioned property behavior (closes [#116](https://github.com/valentine195/obsidian-5e-statblocks/issues/116)) ([6fc2aee](https://github.com/valentine195/obsidian-5e-statblocks/commit/6fc2aee9c8ec605600bc2c7b43120860e03da7de))
* fixes nested inline content not displayed (close [#105](https://github.com/valentine195/obsidian-5e-statblocks/issues/105)) ([4c50bf0](https://github.com/valentine195/obsidian-5e-statblocks/commit/4c50bf040058a76c003429a46bfbb3034ac04a40))

## [2.23.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.22.6...2.23.0) (2022-11-23)


### Features

* adds `extends` parameter (close [#111](https://github.com/valentine195/obsidian-5e-statblocks/issues/111)) ([8e8c63e](https://github.com/valentine195/obsidian-5e-statblocks/commit/8e8c63e6d57b4a182fd2123100cdb42331e1aa48))

### [2.22.6](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.22.5...2.22.6) (2022-11-17)


### Bug Fixes

* statblock renderer now replaces links correctly ([cb440f3](https://github.com/valentine195/obsidian-5e-statblocks/commit/cb440f3e3d9da6d73345d853db5aa9f1c946c41f))

### [2.22.5](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.22.4...2.22.5) (2022-11-08)


### Bug Fixes

* adds more css vars ([68ad4e1](https://github.com/valentine195/obsidian-5e-statblocks/commit/68ad4e10f87e343f62237c5825cbe110c1fb232b))

### [2.22.4](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.22.3...2.22.4) (2022-11-08)


### Bug Fixes

* adds heading font color variable ([35965f7](https://github.com/valentine195/obsidian-5e-statblocks/commit/35965f77eea65a5606af92fdc3b845849ce77bf8))

### [2.22.3](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.22.2...2.22.3) (2022-11-08)


### Bug Fixes

* adds several css variables ([477cfdb](https://github.com/valentine195/obsidian-5e-statblocks/commit/477cfdb18850dfed2d7ee2de692b9f2db4516b4c))

### [2.22.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.22.0...2.22.1) (2022-10-30)


### Bug Fixes

* checks to make sure next exists before trying to scroll in suggesters ([49820f1](https://github.com/valentine195/obsidian-5e-statblocks/commit/49820f1adfeaefe510084fa9b23d4a7df60b4d19))
* improves vault path parsing logic ([f1f8aa5](https://github.com/valentine195/obsidian-5e-statblocks/commit/f1f8aa58d789b5abb08582b131136cd0f9b0106e))
* skip invalid parse folders ([fe55bb4](https://github.com/valentine195/obsidian-5e-statblocks/commit/fe55bb4b096987a675787f34416532fcc3d8bfc9))

## [2.22.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.21.9...2.22.0) (2022-10-27)


### Features

* can now link trait & text block headers to properties ([3c427dc](https://github.com/valentine195/obsidian-5e-statblocks/commit/3c427dc1c97dac08dcebbd6710fe21c0001bf125))

### [2.21.9](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.21.8...2.21.9) (2022-10-20)

### [2.21.8](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.21.7...2.21.8) (2022-10-02)


### Bug Fixes

* fixes issue where traits were incorrectly being filtered out ([8a0823d](https://github.com/valentine195/obsidian-5e-statblocks/commit/8a0823d383520a6d870007bb2711e1270b228495))

### [2.21.7](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.21.6...2.21.7) (2022-09-30)


### Bug Fixes

* removed console logs ([c0b5031](https://github.com/valentine195/obsidian-5e-statblocks/commit/c0b5031700d97f98e13f64cce0801ff73ab9aef9))

### [2.21.6](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.21.5...2.21.6) (2022-09-30)


### Bug Fixes

* fixes [#96](https://github.com/valentine195/obsidian-5e-statblocks/issues/96) even harder ([7c97c17](https://github.com/valentine195/obsidian-5e-statblocks/commit/7c97c1748565b24f38c09cdb45aad3550f40bf61))

### [2.21.5](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.21.4...2.21.5) (2022-09-30)


### Bug Fixes

* fixes images in frontmatter (close [#97](https://github.com/valentine195/obsidian-5e-statblocks/issues/97)) ([e19b4e3](https://github.com/valentine195/obsidian-5e-statblocks/commit/e19b4e308953dab49e8af4064ce2e599fe0b6eeb))
* fixes rendering links in markdown blocks (close [#96](https://github.com/valentine195/obsidian-5e-statblocks/issues/96)) ([2154f2d](https://github.com/valentine195/obsidian-5e-statblocks/commit/2154f2d7f8397e3f01348fde2ea8c81881c43701))
* images now hover preview, open on click (meta modifier for new window) (close [#93](https://github.com/valentine195/obsidian-5e-statblocks/issues/93)) ([9ede1de](https://github.com/valentine195/obsidian-5e-statblocks/commit/9ede1dedbec01026ff156a364a4d6e88febfc4c7))

### [2.21.4](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.21.3...2.21.4) (2022-09-29)


### Bug Fixes

* fixes issue where spell links wouldn't parse correctly (close [#94](https://github.com/valentine195/obsidian-5e-statblocks/issues/94)) ([d8a3ca5](https://github.com/valentine195/obsidian-5e-statblocks/commit/d8a3ca508c5eca39ab843391dd05b9e9bbd1453b))

### [2.21.3](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.21.2...2.21.3) (2022-09-29)


### Bug Fixes

* fixes image link loading regression ([f5fe9e6](https://github.com/valentine195/obsidian-5e-statblocks/commit/f5fe9e6d11667baa708cab291fa81daf30fa79a6))

### [2.21.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.21.1...2.21.2) (2022-09-23)


### Bug Fixes

* greatly improved 5e.tools importer ([5e5df99](https://github.com/valentine195/obsidian-5e-statblocks/commit/5e5df99bd1fae0e77644d0bdceb34fc7b84be76f))

### [2.21.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.21.0...2.21.1) (2022-09-20)


### Bug Fixes

* read & parse markdown links (you're welcome [@ebullient](https://github.com/ebullient) :) ) ([7791e66](https://github.com/valentine195/obsidian-5e-statblocks/commit/7791e660cc3e76468dafd3632bcbbb17d53428e5))
* saves and skillsaves can now be supplied as an object or array of objects ([0deca41](https://github.com/valentine195/obsidian-5e-statblocks/commit/0deca419a45031939baa7b901e1f19a859164541))

## [2.21.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.20.0...2.21.0) (2022-09-13)


### Features

* rewrote 5e.tools importer ([595a354](https://github.com/valentine195/obsidian-5e-statblocks/commit/595a35405f4764d8977ad2146a03356ac331454c))
* sources can now be arrays & filter properly (close [#90](https://github.com/valentine195/obsidian-5e-statblocks/issues/90)) ([0f0cf83](https://github.com/valentine195/obsidian-5e-statblocks/commit/0f0cf836024d1be3a366f227ce0d7eb1c9ff2353))

## [2.20.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.19.1...2.20.0) (2022-09-12)


### Features

* added ability to set multiple bestiary folders ([2b95ffa](https://github.com/valentine195/obsidian-5e-statblocks/commit/2b95ffa54b7dc30e868d4aa579c38e5c312c4945))

### [2.19.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.19.0...2.19.1) (2022-09-12)


### Bug Fixes

* fixes parsing when a bestiary folder is set ([442d21c](https://github.com/valentine195/obsidian-5e-statblocks/commit/442d21c91795c71c47e4479520538c1acf681dbf))

## [2.19.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.18.1...2.19.0) (2022-09-12)


### Features

* adds debug logging ([4afa97d](https://github.com/valentine195/obsidian-5e-statblocks/commit/4afa97dd769f11bc2615fae7d29a8edb6319d71f))

### [2.18.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.18.0...2.18.1) (2022-09-11)


### Bug Fixes

* accidentally disabled save button ([c7166aa](https://github.com/valentine195/obsidian-5e-statblocks/commit/c7166aa56017d1bf7e8803869817e3e2b565f4d0))

## [2.18.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.17.2...2.18.0) (2022-09-11)


### Features

* Adds "Copy YAML" option to statblock menus ([ef70977](https://github.com/valentine195/obsidian-5e-statblocks/commit/ef709775dc2e6cb72aa95a7fa6733cff0b761c48))

### [2.17.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.17.1...2.17.2) (2022-09-01)


### Bug Fixes

* fixes text duplication with dice roller turned on ([2cfbabd](https://github.com/valentine195/obsidian-5e-statblocks/commit/2cfbabd6bafa2233abc73d5cbf8b54a60ef75751))
* improves column logic ([fa78fd8](https://github.com/valentine195/obsidian-5e-statblocks/commit/fa78fd881b6ad0b7e7e13e5cedc5783032f95235))
* improves rendering of text content holder ([6812371](https://github.com/valentine195/obsidian-5e-statblocks/commit/6812371750a87c4d0ea3b5ef692f0ee930610c57))

### [2.17.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.17.0...2.17.1) (2022-08-31)


### Bug Fixes

* fixes rendering wikilinks from saved monsters ([3fa88f1](https://github.com/valentine195/obsidian-5e-statblocks/commit/3fa88f11da69ab5f419b9df25654bda5f2e4729e))

## [2.17.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.16.2...2.17.0) (2022-08-31)


### Features

* Statblocks will now try to detect & render links ([109f278](https://github.com/valentine195/obsidian-5e-statblocks/commit/109f278029b6f4d4691ed97894208615fe4a83a2))

### [2.16.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.16.1...2.16.2) (2022-08-22)

### [2.16.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.16.0...2.16.1) (2022-08-21)


### Bug Fixes

* Adds brat release to workflow ([d52f0cb](https://github.com/valentine195/obsidian-5e-statblocks/commit/d52f0cb75615b1f9b0b50a4fbdc3f61bf6fac950))

## [2.16.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.15.1...2.16.0) (2022-08-21)


### Features

* Editor suggeter for monster names (close [#85](https://github.com/valentine195/obsidian-5e-statblocks/issues/85)) ([391b399](https://github.com/valentine195/obsidian-5e-statblocks/commit/391b399cddec759587be6a32255eb8aed137ea4e))

### [2.15.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.15.0...2.15.1) (2022-08-17)


### Bug Fixes

* fixed issue where a null source could crash bestiary searches ([cf26e7d](https://github.com/valentine195/obsidian-5e-statblocks/commit/cf26e7d97cfe70316b370f2d69aec05646f30d1c))

## [2.15.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.14.11...2.15.0) (2022-08-15)


### Features

* Spells blocks now respect the Render Markdown option ([c5cffe5](https://github.com/valentine195/obsidian-5e-statblocks/commit/c5cffe59852641258251a4569058c62736d85180))

### [2.14.8](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.14.7...2.14.8) (2022-06-26)


### Bug Fixes

* Spell import issues fixed ([ba1dd8f](https://github.com/valentine195/obsidian-5e-statblocks/commit/ba1dd8f9b22f4186f8d49a368e07bcd00705b8a8))

### [2.14.7](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.14.6...2.14.7) (2022-06-21)


### Bug Fixes

* Fixed parsing of strings in spells block ([9e8aae5](https://github.com/valentine195/obsidian-5e-statblocks/commit/9e8aae5078402b4aa486110d7873467402a6ca76))

### [2.14.6](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.14.5...2.14.6) (2022-06-10)


### Bug Fixes

* bump esbuild ([3e08167](https://github.com/valentine195/obsidian-5e-statblocks/commit/3e08167d197bfc28b7b78c43be3e6a8deeae3a21))

### [2.14.5](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.14.4...2.14.5) (2022-06-10)


### Bug Fixes

* Fixes caching issue preventing homebrew from updating (closes [#63](https://github.com/valentine195/obsidian-5e-statblocks/issues/63)) ([2e5565b](https://github.com/valentine195/obsidian-5e-statblocks/commit/2e5565be4bc26030edc7e36e4797a78ca2507fce))
* Several 5e.tools-related import bugs fixed (ref [#58](https://github.com/valentine195/obsidian-5e-statblocks/issues/58)) ([c3652e4](https://github.com/valentine195/obsidian-5e-statblocks/commit/c3652e450d232cce68950568e37f4977a13a3e1f))
* Update full example to include resistances (close [#64](https://github.com/valentine195/obsidian-5e-statblocks/issues/64)) ([027510b](https://github.com/valentine195/obsidian-5e-statblocks/commit/027510ba4569d02440aacfb7aa162201c01e5ce4))

### [2.14.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.14.1...2.14.2) (2022-03-23)


### Bug Fixes

* Fixes issue with settings tab on mobile ([9cb29b6](https://github.com/valentine195/obsidian-5e-statblocks/commit/9cb29b615cb8ccab48a7ed47f0c47fc95ae32142))

### [2.14.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.14.0...2.14.1) (2022-03-10)


### Bug Fixes

* improved column splitting ([908850b](https://github.com/valentine195/obsidian-5e-statblocks/commit/908850b7c79dd078539cbf381279a5655d66352f))
* Integrates PR [#35](https://github.com/valentine195/obsidian-5e-statblocks/issues/35) ([7284fb8](https://github.com/valentine195/obsidian-5e-statblocks/commit/7284fb80f8df5cf605fc2c85cf452276391d9aca))
* Statblock Columns were being built too aggressively ([117b9ec](https://github.com/valentine195/obsidian-5e-statblocks/commit/117b9ec16a448a024aafb02ef39930c105a7d366))

## [2.14.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.13.0...2.14.0) (2022-03-10)


### Features

* Adds Custom Layout importer ([0ec8175](https://github.com/valentine195/obsidian-5e-statblocks/commit/0ec8175128a2f30963a30625a54f0f19014e52da))

## [2.13.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.12.2...2.13.0) (2022-03-10)


### Features

* Adds Lair Actions to Basic 5e Layout (close [#38](https://github.com/valentine195/obsidian-5e-statblocks/issues/38)) ([4a66ce9](https://github.com/valentine195/obsidian-5e-statblocks/commit/4a66ce91f6f9a8d69af1f3cb2b24c3ec81d3d224))


### Bug Fixes

* Fixes dropping into inline groups (close [#45](https://github.com/valentine195/obsidian-5e-statblocks/issues/45)) ([dfa0ec7](https://github.com/valentine195/obsidian-5e-statblocks/commit/dfa0ec7770f12e3fbb654f8bbcca2b6f1dc7121b))
* Improves file parsing for statblocks defined in frontmatter (close [#44](https://github.com/valentine195/obsidian-5e-statblocks/issues/44)) ([52b4990](https://github.com/valentine195/obsidian-5e-statblocks/commit/52b4990e4c62c8353551d6893c73ef72436eacc5))

### [2.12.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.12.1...2.12.2) (2022-03-01)


### Bug Fixes

* Significantly improved settings page performance ([4df1591](https://github.com/valentine195/obsidian-5e-statblocks/commit/4df159117498f9a2b524be1796de45ddea551e33))

### [2.12.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.12.0...2.12.1) (2022-02-22)


### Bug Fixes

* add ability to set monster display name when rendering from initiative tracker ([6c6b750](https://github.com/valentine195/obsidian-5e-statblocks/commit/6c6b750d3c5ca7b98f2eafa224e1adcbfa42fce1))

## [2.12.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.11.7...2.12.0) (2022-02-20)


### Features

* Adds basic fate core layout option ([0aed05e](https://github.com/valentine195/obsidian-5e-statblocks/commit/0aed05ed7021cb5e48c9509063c790e6a0e01dad))

### [2.11.7](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.11.6...2.11.7) (2022-02-17)


### Bug Fixes

* re-added fantasy age stat table ([4335167](https://github.com/valentine195/obsidian-5e-statblocks/commit/43351672c00040f6c6eae43a2b8eb1ec2adccc3e))

### [2.11.6](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.11.5...2.11.6) (2022-02-17)

### Bug Fixes

* Basic 5e Statblock now supports Bonus Actions (thank you @kgar) (PR [#40](https://github.com/valentine195/obsidian-5e-statblocks/pull/40))

### [2.11.5](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.11.4...2.11.5) (2022-02-16)


### Bug Fixes

* greatly improved image loading ([ca94352](https://github.com/valentine195/obsidian-5e-statblocks/commit/ca943528b9c0b4b4f17caf97b85dafa64da9f9a5))

### [2.11.4](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.11.3...2.11.4) (2022-02-13)


### Bug Fixes

* fixes order of int and wis in basic 5e statblock (fix [#37](https://github.com/valentine195/obsidian-5e-statblocks/issues/37)) ([43b0bbd](https://github.com/valentine195/obsidian-5e-statblocks/commit/43b0bbd00f6e8ecaf6197fd6d06095119cac6806))

### [2.11.3](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.11.2...2.11.3) (2022-01-28)


### Bug Fixes

* 🐛 removes log ([05f342a](https://github.com/valentine195/obsidian-5e-statblocks/commit/05f342ab606b669b62008e8e7aa71901a50117a0))

### [2.11.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.11.1...2.11.2) (2022-01-28)


### Bug Fixes

* 🐛 fixes issue with escaped characters in markdown ([ffce2b8](https://github.com/valentine195/obsidian-5e-statblocks/commit/ffce2b8203ce3d62228354212ee6faa0c9d7aae7))

### [2.11.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.11.0...2.11.1) (2022-01-22)


### Bug Fixes

* fixed issue with editing blocks in custom layouts ([83e2bd3](https://github.com/valentine195/obsidian-5e-statblocks/commit/83e2bd35fe3035651304271ba52799c9d98621ab))

## [2.11.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/1.5.8...2.11.0) (2022-01-22)


### Features

* TTRPG Statblocks 2.X Release! ([e5d2e79](https://github.com/valentine195/obsidian-5e-statblocks/commit/e5d2e79f1790d90a6d0ddcd3f1d1b09672b1b2ea))

## [2.10.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.9.0...2.10.0) (2022-01-21)


### Features

* add support for statblocks defined in yaml ([de81930](https://github.com/valentine195/obsidian-5e-statblocks/commit/de8193046025f714c859b4e56e13253f34ba35ac))


### Bug Fixes

* fix column wrapping logic on large blocks ([7e6b3fc](https://github.com/valentine195/obsidian-5e-statblocks/commit/7e6b3fce272c9195f8de22e371b4e28dd6e08a1c))
* fixed issue with settings when monster had no source ([299f5c7](https://github.com/valentine195/obsidian-5e-statblocks/commit/299f5c7d2f169e134782e0827cecf903763ff49b))

## [2.9.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.8.0...2.9.0) (2022-01-21)


### Features

* switch to esbuild ([766bb45](https://github.com/valentine195/obsidian-5e-statblocks/commit/766bb455444928cc8d44e333d3ee11e30bfc9dcb))


### Bug Fixes

* fixes issue where providing an empty subtype would crash plugin ([b16bfd0](https://github.com/valentine195/obsidian-5e-statblocks/commit/b16bfd03d7a92f495b9fa230667c6e1e1bc5128f))
* removed logs ([ac4789a](https://github.com/valentine195/obsidian-5e-statblocks/commit/ac4789ab87d321ae724515de96b7c215d04159ae))
* removes extraneous logs ([da7f93a](https://github.com/valentine195/obsidian-5e-statblocks/commit/da7f93a849e493850ad04cc5323e524799dc3d71))

## [2.8.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.7.1...2.8.0) (2022-01-20)


### Features

* adds export as json option to Layouts ([a2782f9](https://github.com/valentine195/obsidian-5e-statblocks/commit/a2782f92e13f874244c88a5e833a9b088dc08633))


### Bug Fixes

* removed console logs ([ce14ef3](https://github.com/valentine195/obsidian-5e-statblocks/commit/ce14ef3ee181830c3639f9ca18b0726c40518def))

### [2.7.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.7.0...2.7.1) (2022-01-20)


### Bug Fixes

* update load monster to prevent reference collisions ([1690d5c](https://github.com/valentine195/obsidian-5e-statblocks/commit/1690d5c4ac54c04f5a64f0f617ed6e521ee5f777))

## [2.7.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.6.0...2.7.0) (2022-01-20)


### Features

* adds classes to container and parent element in postprocessor ([1390e2e](https://github.com/valentine195/obsidian-5e-statblocks/commit/1390e2e13c961fa52ae53fc124dfe1ef492d5c23))

## [2.6.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.5.2...2.6.0) (2022-01-20)


### Features

* adds `columns` and `columnWidth` properties (closes [#34](https://github.com/valentine195/obsidian-5e-statblocks/issues/34)) ([7c37d17](https://github.com/valentine195/obsidian-5e-statblocks/commit/7c37d17a4527865a39954e3b49e432998a445bff))

### [2.5.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.5.1...2.5.2) (2022-01-17)


### Bug Fixes

* escaped characters are parsed post-yaml (close [#32](https://github.com/valentine195/obsidian-5e-statblocks/issues/32)) ([f56f47f](https://github.com/valentine195/obsidian-5e-statblocks/commit/f56f47ff6fb0fca98764d3b7143b1fe419b5a850))

### [2.5.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.5.0...2.5.1) (2022-01-17)

## [2.5.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.4.0...2.5.0) (2022-01-17)


### Features

* Add TetraCube importer (close [#32](https://github.com/valentine195/obsidian-5e-statblocks/issues/32)) ([6e371aa](https://github.com/valentine195/obsidian-5e-statblocks/commit/6e371aa7250443059622b4d202c0f1b755cd0c05))


### Bug Fixes

* layout is saved with "Save as Homebrew" (close [#31](https://github.com/valentine195/obsidian-5e-statblocks/issues/31)) ([16e150b](https://github.com/valentine195/obsidian-5e-statblocks/commit/16e150bc758e82deab7b3852f46a92de17d5b7e7))

## [2.4.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.3.1...2.4.0) (2022-01-13)


### Features

* adds text block type to layouts ([#30](https://github.com/valentine195/obsidian-5e-statblocks/issues/30)) ([137566a](https://github.com/valentine195/obsidian-5e-statblocks/commit/137566a2a751cde8e12b0cdf2466130e4a7a43b8))
* layout name is now added to statblocks ([8d73700](https://github.com/valentine195/obsidian-5e-statblocks/commit/8d73700a344bda22827e00c15d25945073e3a394))
* Property, Saves, Spells, Text, and Traits block types can now render markdown ([#24](https://github.com/valentine195/obsidian-5e-statblocks/issues/24), [#5](https://github.com/valentine195/obsidian-5e-statblocks/issues/5), [#16](https://github.com/valentine195/obsidian-5e-statblocks/issues/16)) ([cb75afe](https://github.com/valentine195/obsidian-5e-statblocks/commit/cb75afe2c9e521d2a160420078efc457ca621412))
* Table blocks have optional `calculate` property to turn off modifier calculation ([#30](https://github.com/valentine195/obsidian-5e-statblocks/issues/30)) ([fce05c6](https://github.com/valentine195/obsidian-5e-statblocks/commit/fce05c6b3296707c354a4f7ffec88a615f3482ab))


### Bug Fixes

* Fixed column wrapping algorithm ([6275eec](https://github.com/valentine195/obsidian-5e-statblocks/commit/6275eecab59ca36534e961b46a097fb06da8a62c))
* Fixed issue with removing 5e-based properties from monsters ([#30](https://github.com/valentine195/obsidian-5e-statblocks/issues/30)) ([64c8b1c](https://github.com/valentine195/obsidian-5e-statblocks/commit/64c8b1cb757b10564035a7c5530267b6fe3a47bc))
* Fixed issue with viewing monster in settings ([1f90976](https://github.com/valentine195/obsidian-5e-statblocks/commit/1f9097674380198aea1ee25dc609a6519f957307))
* fixes issue with creating a new layout from scratch ([860aeac](https://github.com/valentine195/obsidian-5e-statblocks/commit/860aeac9c8c21f1c111f9377eca9672a1a9435ec))

## [2.4.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.3.1...2.4.0) (2022-01-13)


### Features

* adds text block type to layouts ([#30](https://github.com/valentine195/obsidian-5e-statblocks/issues/30)) ([137566a](https://github.com/valentine195/obsidian-5e-statblocks/commit/137566a2a751cde8e12b0cdf2466130e4a7a43b8))
* layout name is now added to statblocks ([8d73700](https://github.com/valentine195/obsidian-5e-statblocks/commit/8d73700a344bda22827e00c15d25945073e3a394))
* Property, Saves, Spells, Text, and Traits block types can now render markdown ([#24](https://github.com/valentine195/obsidian-5e-statblocks/issues/24), [#5](https://github.com/valentine195/obsidian-5e-statblocks/issues/5), [#16](https://github.com/valentine195/obsidian-5e-statblocks/issues/16)) ([cb75afe](https://github.com/valentine195/obsidian-5e-statblocks/commit/cb75afe2c9e521d2a160420078efc457ca621412))
* Table blocks have optional `calculate` property to turn off modifier calculation ([#30](https://github.com/valentine195/obsidian-5e-statblocks/issues/30)) ([fce05c6](https://github.com/valentine195/obsidian-5e-statblocks/commit/fce05c6b3296707c354a4f7ffec88a615f3482ab))


### Bug Fixes

* Fixed column wrapping algorithm ([6275eec](https://github.com/valentine195/obsidian-5e-statblocks/commit/6275eecab59ca36534e961b46a097fb06da8a62c))
* Fixed issue with removing 5e-based properties from monsters ([#30](https://github.com/valentine195/obsidian-5e-statblocks/issues/30)) ([64c8b1c](https://github.com/valentine195/obsidian-5e-statblocks/commit/64c8b1cb757b10564035a7c5530267b6fe3a47bc))
* Fixed issue with viewing monster in settings ([1f90976](https://github.com/valentine195/obsidian-5e-statblocks/commit/1f9097674380198aea1ee25dc609a6519f957307))
* fixes issue with creating a new layout from scratch ([860aeac](https://github.com/valentine195/obsidian-5e-statblocks/commit/860aeac9c8c21f1c111f9377eca9672a1a9435ec))

### [2.3.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.3.0...2.3.1) (2022-01-06)


### Bug Fixes

* fix column wrapping ([ea619c2](https://github.com/valentine195/obsidian-5e-statblocks/commit/ea619c2f9445caa0dfb2fa226c910d4b22b7334c))
* fix column wrapping better ([7c3793d](https://github.com/valentine195/obsidian-5e-statblocks/commit/7c3793daabc2af20233219c8cd61459b04646173))
* remove log from image component ([876abbc](https://github.com/valentine195/obsidian-5e-statblocks/commit/876abbc87745a431d18425d9c745942063f77c9b))
* update plugin name in console messages ([9aa7b53](https://github.com/valentine195/obsidian-5e-statblocks/commit/9aa7b533fc2cc1519bcd12081f87636d888e4264))

## [2.3.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.2.4...2.3.0) (2022-01-06)


### Features

* allow any monster to be saved (close [#27](https://github.com/valentine195/obsidian-5e-statblocks/issues/27)) ([861c8cb](https://github.com/valentine195/obsidian-5e-statblocks/commit/861c8cb3473f3cc8c57d9d7c86991144431a33e0))


### Bug Fixes

* dice enabled blocks now default to using plugin parse method if no property or callback is provided ([f6fa7eb](https://github.com/valentine195/obsidian-5e-statblocks/commit/f6fa7ebf3d139be72726f80506a7fce56135adea))

### [2.2.4](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.2.3...2.2.4) (2022-01-06)


### Bug Fixes

* fixed damage resistances display name and order (close [#26](https://github.com/valentine195/obsidian-5e-statblocks/issues/26)) ([6e91ac7](https://github.com/valentine195/obsidian-5e-statblocks/commit/6e91ac7d40e7ebf3d92587ec7faa3b64722a93cd))

### [2.2.3](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.2.2...2.2.3) (2022-01-04)

### [2.2.2](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.2.1...2.2.2) (2022-01-04)


### Bug Fixes

* added image type to statblock layout creator ([0d6b5ad](https://github.com/valentine195/obsidian-5e-statblocks/commit/0d6b5adccc6769d496d5cbab53ac8e08ca3033f8))
* property block now recursively stringifies ([fef806f](https://github.com/valentine195/obsidian-5e-statblocks/commit/fef806f4992afa8f58880b19fc13ad5073143ea3))
* Property block now uses fallback correctly ([036c262](https://github.com/valentine195/obsidian-5e-statblocks/commit/036c262032bb0b97046e42958164c8a53b713640))

### [2.2.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.2.0...2.2.1) (2022-01-04)


### Bug Fixes

* made image bigger ([b52f92f](https://github.com/valentine195/obsidian-5e-statblocks/commit/b52f92f0467af3aa067fba328a7bbfdf8bb0fbf8))

## [2.2.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.1.1...2.2.0) (2022-01-04)


### Features

* added `image` parameter to statblocks ([0265dcc](https://github.com/valentine195/obsidian-5e-statblocks/commit/0265dcc7a10974244b32d8f74543b15192287bad))
* statblocks now receive monster name as class ([9b11b80](https://github.com/valentine195/obsidian-5e-statblocks/commit/9b11b80cfa779fb953e8ebe1791d8cff75b297c9))


### Bug Fixes

* Menu dropdown icon is now placed outside of statblock element ([115792a](https://github.com/valentine195/obsidian-5e-statblocks/commit/115792a4f1d3f4129caceb4a97058a692b390838))
* Subheading recursively stringifies properties ([34d291a](https://github.com/valentine195/obsidian-5e-statblocks/commit/34d291a0b3aa94894070828875d51d95832b63ad))
* Table headers maintain coloring ([707709f](https://github.com/valentine195/obsidian-5e-statblocks/commit/707709fdc47e3d0f1ec66c890e1d344333581ef8))

### [2.1.1](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.1.0...2.1.1) (2021-12-22)


### Bug Fixes

* default statblock now respected ([d517b02](https://github.com/valentine195/obsidian-5e-statblocks/commit/d517b026c036c3311ff177d8f6c38f4ab8b0be94))
* statblock is now a valid parameter (same as layout) ([0d9da5d](https://github.com/valentine195/obsidian-5e-statblocks/commit/0d9da5d209e7a6552aaf980948e760c09f3f08cf))

## [2.1.0](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.0.12...2.1.0) (2021-12-21)


### Features

* added "Delete All Filtered" button to settings ([0dcff35](https://github.com/valentine195/obsidian-5e-statblocks/commit/0dcff35db70120da8fe266e4b752e0404e99baec))


### Bug Fixes

* failing to get a dice roller broke plugin ([ba5a2a1](https://github.com/valentine195/obsidian-5e-statblocks/commit/ba5a2a1b27184245d126639a3f7199bbc26169cb))
* improved initiative importing errors (close [#21](https://github.com/valentine195/obsidian-5e-statblocks/issues/21)) ([5d0010f](https://github.com/valentine195/obsidian-5e-statblocks/commit/5d0010f90098d5f0a45b3f095a3dade4c879d988))
* increased threshold to create multiple columns ([3d95c86](https://github.com/valentine195/obsidian-5e-statblocks/commit/3d95c864cce5d9d00bc5318ee1d5bab4c90cec74))
* proficiency bonus is now correctly calculated ([3cc9bbe](https://github.com/valentine195/obsidian-5e-statblocks/commit/3cc9bbe13d555c006e2866488a382280984a8732))

### [2.0.12](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.0.11...2.0.12) (2021-12-21)


### Bug Fixes

* fixed issue with displaying conditioned properties ([c1ea36a](https://github.com/valentine195/obsidian-5e-statblocks/commit/c1ea36ac588868a1a6f7029d56ebbba011bc1c35))

### [1.5.8](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.0.8...1.5.8) (2021-12-16)


### Bug Fixes

* fixed data.map bug ([11d68e8](https://github.com/valentine195/obsidian-5e-statblocks/commit/11d68e81f291b343acacac0a2497d390814faac3))

### [1.5.6](https://github.com/valentine195/obsidian-5e-statblocks/compare/2.0.8...1.5.6) (2021-12-16)


### Bug Fixes

* fixed data.map bug ([11d68e8](https://github.com/valentine195/obsidian-5e-statblocks/commit/11d68e81f291b343acacac0a2497d390814faac3))
