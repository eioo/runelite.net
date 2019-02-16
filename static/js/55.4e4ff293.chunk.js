(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{253:function(n,e){n.exports={title:"1.4.19 Release",description:"Grand Exchange buy limits, Barbarian Assault game/wave duration timers",author:"Tomas",__content:'<p>Grand Exchange buy limits were added to the Grand Exchange plugin, which will show <code>Buy limit: x</code>\nin GE window for items with known buy limits. Thanks to <a href="https://github.com/Asymons">@Asymons</a> for this contribution.</p>\n<p><img src="/img/blog/1.4.19-Release/buylimits.png" alt="gebuylimits"/></p>\n<p>A timer for Barbarian Assault waves and full game was added to the Barbarian Assault plugin that will\nannounce the times in your chat thanks to <a href="https://github.com/Jacoblairm">@Jacoblairm</a>.</p>\n<p><img src="/img/blog/1.4.19-Release/bawave.png" alt="bawave"/>\n<img src="/img/blog/1.4.19-Release/bagame.png" alt="bagame"/></p>\n<p>There are also numerous smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Duplicated display of actively traded price in GE interface has been fixed</li>\n<li>Teleblock timers are now removed when entering safe zone/leaving wilderness</li>\n<li>Search bar was added to the skill calculator plugin</li>\n<li>Little boulder in Weiss was added to the agility plugin obstacle highlighting</li>\n<li>Notes plugin now supports undo and redo (with ctrl-z and ctrl-u)</li>\n<li>Instance map now has a close button in top-right corner</li>\n<li>NPC indicators now has support for highlighting the south-west tile for large NPCs</li>\n<li>Idle notifier now also supports idle notifications for low oxygen on Fossil Island</li>\n<li>Charged versions of the new wilderness weapons will now display their prices correctly</li>\n<li>World map clipping in fixed mode has been fixed</li>\n<li>Multiple world points for hot/cold clues has been centered and should not show the wrong destination anymore</li>\n<li>The opponent info plugin now has a configuration option to always show opponent health in percent</li>\n<li>The Discord plugin now has a configuration option to hide the &quot;time elapsed&quot;</li>\n<li>You can now configure the prayer flick helper to show even when prayers are off</li>\n<li>Fix loot tracker not grouping Barrows loots</li>\n</ul>\n<p>In regards to the <a href="https://runelite.net/blog/show/2018-09-18-Worldhopper-disabled">world hopper being disabled</a>:\nAfter speaking with Jagex and other client developers, we think the chat message hop-to option is what is causing the issues. Jagex is allowing us to readd the world hopper without this feature in this release, and will let us know if it causes any further problems.</p>\n<p>Enjoy!</p>\n<p>- Tomas</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 24 contributors this release!</p>\n<pre><code>Adam (2):\n      opponent info: add config opt to show health as percent\n      xp tracker: limit to one update per 5 minutes\n\nAlessio (1):\n      Add GE limits to Grand Exchange Plugin Search\n\nArthurTsvettsih (1):\n      Add Undo Redo support for the Note plugin (#5606)\n\nBen Moyer (1):\n      Reduce tab size in notes panel to 2 (#5599)\n\nJacob McElroy (2):\n      Add barbarian assault game duration timer (#4590)\n      Fix Fremennik Hot/Cold clue scroll dig location.\n\nJordan Atwood (6):\n      Add IN_WILDERNESS Varbit\n      Add PVP and Deadman widget info\n      worldtype: Add PVP_WORLD_TYPES and isPvpWorld\n      timers plugin: Reset Teleblock on entering safe zone\n      slayer plugin: Add parsing for boss task assignments\n      slayer plugin: Use boss pets as slayer icons\n\nJustin Barnyak (1):\n      Change Prayerbar Color Scheme to be Colorblind Friendly\n\nMSAskew (1):\n      Updated co-ordinates to match location suggested by user and cross-referenced with osrs wiki to confirm as there were two possibilities.\n\nMax Weber (1):\n      devtools: Add Interacting arrow devtool\n\nMichael Goodwin (1):\n      Fix HotColdLocation WorldPoint\n\nMike (1):\n      Add option to disable time elapsed on discord activity (#5590)\n\nRobin Withes Linux (1):\n      Lady of the lake clue scroll rename\n\nRunelite auto updater (1):\n      [maven-release-plugin] prepare for next development iteration\n\nShaun Dreclin (1):\n      Add option to always show prayer flick helper\n\nTomas Slusny (4):\n      Simplify checkbox checks in skill calc\n      Fix GE OSB actively traded price races\n      Cleanup skill calculator\n      Move IconTextField common icons to IconTextField.Icon class\n\nUnknown (1):\n      instancemap: add &#39;X&#39; button on the interface to close map\n\ndavidyip50 (1):\n      Correct location of Kharazi Jungle Hot/Cold clue (#5610)\n\njohnhamilto (1):\n      Add south-western tile indicator to NPC indicators (#5551)\n\nltvill (2):\n      Hot/Cold clue West of Brimhaven location fix\n      Hot/Cold clue near Fishing tutor location fix\n\npsikoi (1):\n      Fix loot tracker box subtitle\n\nrbbi (1):\n      Add searchbar suppor to Skill Calculator\n\nrobinwithes (2):\n      Add little boulder from weiss into agility obstacles (#5636)\n      Add oxygen alert to idle notifier (#5630)\n\nrune3132 (1):\n      Add wilderness weapons item mappings\n\nsteffenhauge (1):\n      Add Justiciar armor set prayer bonuses to the prayer plugin (#5651)\n\ntrimbe (1):\n      Fix clipping in fixed mode for edge snapping map points\n</code></pre>'}}}]);
//# sourceMappingURL=55.4e4ff293.chunk.js.map