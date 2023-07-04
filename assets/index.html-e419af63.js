import{_ as e,W as i,X as l,a0 as o}from"./framework-fe2d940b.js";const t={},r=o('<h1 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h1><h2 id="_2-19-9-coming-soon" tabindex="-1"><a class="header-anchor" href="#_2-19-9-coming-soon" aria-hidden="true">#</a> 2.19.9 (Coming soon)</h2><ul><li>✨ <strong>NEW</strong> Flow Gen 3.1! New, better, improved. Now supports modularity switch, with 3 random parameters</li><li>✨ Improvements to String Encryption, Flow Obfuscation, and more!</li><li>✨ New console look!</li><li>🐛 Fixed a bug where verification would attempt to check non hierarchal libraries, adding redundancy</li><li>🐛 Fixed a bug where Driver would return null due to collision</li><li>🐛 Fixed a bug where InterfConstRef would be invalid</li><li>🐛 Fixed a bug where clone implicit bridge would be obfuscated, causing conflicts</li><li>🐛 Improved hierarchy caching in speed, accuracy and efficiency</li><li>🐛 Fixed a bug where hierarchy would conflict method groups and not properly define them</li><li>🐛 Fixed a bug where method exemptions for groups would fail to check class parent exemptions</li><li>📚 More documentation to wiki</li></ul><h2 id="_2-19-8" tabindex="-1"><a class="header-anchor" href="#_2-19-8" aria-hidden="true">#</a> 2.19.8</h2><ul><li>Huge improvements to overall stability tested 25x on unit</li><li>Overall improvements on the debugging aspect</li><li>Improvements to flow obfuscation</li></ul><h2 id="_2-19-7" tabindex="-1"><a class="header-anchor" href="#_2-19-7" aria-hidden="true">#</a> 2.19.7</h2><ul><li>NEW ✨ Reference Obfuscation (disabled by default, suggested by @pathos &amp; @McYeet)</li><li>NEW ✨ New GEN3 renderers</li><li>Stability fixes</li><li>Fixed a bug where congruent methods would cause a group overlap, causing bridge methods to be rewritten</li><li>Fixed a bug where overwriting the skidgroup desc directly via the methods would be dispensed and ignored due to the outliner and the exception return transformer</li><li>Improvements to flow obfuscation</li><li>Fixed an issue where path would be mis-read</li><li>Fixed an issue with the switch proxy renderer</li></ul><h2 id="_2-19-6" tabindex="-1"><a class="header-anchor" href="#_2-19-6" aria-hidden="true">#</a> 2.19.6</h2><ul><li>NEW ✨ Exception Return Obfuscation</li><li>NEW ✨ Toggleable Driver (suggested by @MlxySF)</li><li>NEW ✨ Modifiable and exemptable driver (exclusively per class)</li><li>NEW ✨ Modifiable driver path (Suggested by @pathos)</li><li>NEW ✨ Custom dictionaries (Suggested by @𝕄𝕣. 𝕄𝕔𝕐𝕖𝕖𝕥)</li><li>NEW ✨ File hider technique (Suggested by @pathos)</li><li>Stability fixes</li><li>Overall improvements on the debugging aspect</li><li>Improvements to flow obfuscation</li><li>Fixed an issue where path would be mis-read</li><li>Improved exception handling for GEN3 renderer</li><li>Added basis for new and better GEN3 proxies</li></ul><h2 id="_2-19-5" tabindex="-1"><a class="header-anchor" href="#_2-19-5" aria-hidden="true">#</a> 2.19.5</h2><ul><li>Improved flow obfuscation to be more overall resilient</li><li>Added some internal tamper protection</li><li>Fixed driver not properly compiling for linux</li><li>Fixed outliner executing on interfaces</li><li>Added Exception Return transformer (DEV-ONLY)</li><li>More fixes to dispatcher</li></ul><h2 id="_2-19-4" tabindex="-1"><a class="header-anchor" href="#_2-19-4" aria-hidden="true">#</a> 2.19.4</h2><ul><li>NEW ✨ Added config</li><li>Fixed issue where debug info wouldn&#39;t be parsed by MapleIR, causing internal issues</li><li>Fixed issue with exclusions not being acknowledged by verifier</li><li>Fixes to flow obfuscation</li><li>Fixes to MapleIR and IR generation</li><li>Improved overall initialisation generation stability</li><li>Added strength modes to exception obfuscation</li><li>Improved GEN3 by adding natively hardened predicates (option in config)</li><li>Added back polymorphic string obfuscation (option in config)</li><li>Improved stability, reverted back to single upload for client</li><li>Added partial kotlin obfuscation (WIP)</li><li>Added more documentation on website</li><li>Added crashers (DEV-ONLY)</li><li>Added junk code basis (DEV-ONLY)</li><li>Added basis for starter packs (WIP, do NOT use! Testing only :3)</li></ul><h2 id="_2-19-3" tabindex="-1"><a class="header-anchor" href="#_2-19-3" aria-hidden="true">#</a> 2.19.3</h2><ul><li>Fixed FactoryMakerTransformer failing to add file correctly to classpath.</li><li>Fixed String transformation.</li><li>Fixed computed exception not being the parent one.</li><li>Removed debug information.</li><li>Fixed miscalculation of stack depth in MapleIR.</li><li>Fixed exemption misread bug.</li><li>Fixed community mappings generator.</li><li>Fixed exception transformer causing issues with string encryption.</li><li>Fixed annotation string encryption.</li></ul>',15),a=[r];function n(d,s){return i(),l("div",null,a)}const u=e(t,[["render",n],["__file","index.html.vue"]]);export{u as default};
