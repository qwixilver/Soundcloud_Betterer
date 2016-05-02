// ==UserScript==
// @name         Soundcloud betterer notes n stuff
// @namespace    https://soundcloud.com/stream
// @version      0.1
// @description  try to take over the world!
// @author       Ron Hoffecker JR
// @match        https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
// @grant        none
// ==/UserScript==
// This is just the very very very beginning. Nothing serious is going on here yet!

    // Your code here...
    //The below creates the "reposts" tab so that we can sort things into it. May need minor tweaks still, but it is functional:
    var Tabs = $(".g-tabs");
    var Add2tabs = document.createElement("LI");
    Add2tabs.classList.add("g-tabs-item");
    Add2tabs.innerHTML="<a class=\"g-tabs-link \" href=\"#\">Reposts</a>";
    Tabs.appendChild(Add2tabs);
    //////////////////////////////////////////////////////////////////////////////////////
    var Reposts = document.getElementsByClassName("soundContext__repost"); //grabs the sub element of all sounds that have been reposted
    var AllSounds = document.getElementsByClassName("soundContext__line"); // grabs the container for all sounds
