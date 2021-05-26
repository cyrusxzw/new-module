"use strict";var i=new Map([["xs",{minWidth:0,maxWidth:320}],["sm",{minWidth:321,maxWidth:639}],["md",{minWidth:640,maxWidth:1024}],["lg",{minWidth:1025,maxWidth:1219}],["xl",{minWidth:1220,maxWidth:1599}],["x2l",{minWidth:1600,maxWidth:1919}],["x3l",{minWidth:1920,maxWidth:2399}],["x4l",{minWidth:2400}]]),t=new Map([["xs","(min-width: "+i.get("xs").minWidth+"px)"],["xs only","(min-width: "+i.get("xs").minWidth+"px) and (max-width: "+i.get("xs").maxWidth+"px)"],["sm","(min-width: "+i.get("sm").minWidth+"px)"],["sm only","(min-width: "+i.get("sm").minWidth+"px) and (max-width: "+i.get("sm").maxWidth+"px)"],["xs to sm only","(min-width: "+i.get("xs").minWidth+"px) and (max-width: "+i.get("sm").maxWidth+"px)"],["md","(min-width: "+i.get("md").minWidth+"px)"],["md only","(min-width: "+i.get("md").minWidth+"px) and (max-width: "+i.get("md").maxWidth+"px)"],["xs to md only","(min-width: "+i.get("xs").minWidth+"px) and (max-width: "+i.get("md").maxWidth+"px)"],["lg","(min-width: "+i.get("lg").minWidth+"px)"],["lg only","(min-width: "+i.get("lg").minWidth+"px) and (max-width: "+i.get("lg").maxWidth+"px)"],["xl","(min-width: "+i.get("xl").minWidth+"px)"],["xl only","(min-width: "+i.get("xl").minWidth+"px) and (max-width: "+i.get("xl").maxWidth+"px)"],["lg to xl only","(min-width: "+i.get("lg").minWidth+"px) and (max-width: "+i.get("xl").maxWidth+"px)"],["lg to x2l only","(min-width: "+i.get("lg").minWidth+"px) and (max-width: "+i.get("x2l").maxWidth+"px)"],["xs to xl only","(min-width: "+i.get("xs").minWidth+"px) && (max-width: "+i.get("xl").maxWidth+"px)"],["x2l","(min-width: "+i.get("x2l").minWidth+"px)"],["x3l","(min-width: "+i.get("x3l").minWidth+"px)"],["x4l","(min-width: "+i.get("x4l").minWidth+"px)"]]);exports.BREAKPOINTS=i,exports.VIEWPORTS=t;
