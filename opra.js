

/* Modified to support Opera */
function bookmarksite(title,url){
if (window.sidebar) // firefox
	window.open('makefavorite.php?url=' + url);
else if(window.opera && window.print){ // opera
	window.open('makefavorite.php?url=' + url);
} 
else if(document.all)// ie
	window.external.AddFavorite(url, title);
}

function homepage(obj,url){
	if (window.sidebar){ // firefox
	window.open('makehomepage.php?url=' + url);
	     //alert('..then copy and paste (' + url +') in the homepage box');
	}else if(window.opera && window.print){ // opera
	window.open('makehomepage.php?url=' + url);
	     //alert('..then copy and paste (' + url +') in the homepage box');
   
	}else if(document.all){
	   obj.style.behavior='url(#default#homepage)';
	   obj.setHomePage(url);
	}
}
