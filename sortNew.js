var chevron_down = "chevron_down";
var chevron_up = "chevron_up";
var newSongsURL = "https://soundcloud.com/charts/new";

function sortListDescending(ul){
    var new_ul = ul.cloneNode(false);

    // Add all lis to an array
    var lis = [];
    for(var i = 0; i < ul.children.length; i++){
        lis.push(ul.children[i]);
    }

    // Sort the lis in descending order
    lis.sort(function(a, b){
	  c = a.getElementsByTagName("time")[0].getAttribute("datetime");
	  d = b.getElementsByTagName("time")[0].getAttribute("datetime");
       if(c < d){
         return -1;
       }else if(c == d){
         return 0;
       }else{
         return 1;
       }
    });

    // Rename the track #'s
    for(var i = 0; i < lis.length; i++){
      lis[i].getElementsByClassName("chartTrack__position")[0].innerHTML = i+1;
    }

    // Add them into the ul in order
    for(var i = 0; i < lis.length; i++)
        new_ul.appendChild(lis[i]);
    ul.parentNode.replaceChild(new_ul, ul);
}

function sortListAscending(ul){
    var new_ul = ul.cloneNode(false);

    // Add all lis to an array
    var lis = [];
    for(var i = 0; i < ul.children.length; i++){
        lis.push(ul.children[i]);
    }

    // Sort the lis in descending order
    lis.sort(function(a, b){
	  c = a.getElementsByTagName("time")[0].getAttribute("datetime");
	  d = b.getElementsByTagName("time")[0].getAttribute("datetime");
       if(c < d){
         return 1;
       }else if(c == d){
         return 0;
       }else{
         return -1;
       }
    });

    // Rename the track #'s
    for(var i = 0; i < lis.length; i++){
      lis[i].getElementsByClassName("chartTrack__position")[0].innerHTML = i+1;
    }

    // Add them into the ul in order
    for(var i = 0; i < lis.length; i++)
        new_ul.appendChild(lis[i]);
    ul.parentNode.replaceChild(new_ul, ul);
}

function toggleChevron(){
  var ul = document.getElementsByClassName("lazyLoadingList__list")[0];
  var chevron_span = document.getElementById('chevron_span');
  if(chevron_span.className == chevron_up){
    chevron_span.className = chevron_down;
    sortListDescending(ul);
  }else{
    chevron_span.className = chevron_up;
    sortListAscending(ul);
  }
}

function loaded(){
    console.log("LOADED");
    var chevron = document.getElementsByClassName("chartsMain_listHeaderPlays")[0];
    chevron.className += " sortBtn";
    chevron.onclick = toggleChevron;
    if(!chevron.innerHTML.includes("</span>")){
      chevron.innerHTML += "<span id='chevron_span' class='" + chevron_down + "'></span>";
    }
  }

var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if( MutationObserver ){
            // define a new observer
            var obs = new MutationObserver(function(mutations, observer){
                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                    callback();
            });
            // have the observer observe foo for changes in children
            obs.observe( obj, { childList:true, subtree:true });
        }
        else if( eventListenerSupported ){
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    }
})();

observeDOM( document.getElementById('content') ,function(){
    if(window.location.href.includes(newSongsURL)){
      loaded();
    }
});
