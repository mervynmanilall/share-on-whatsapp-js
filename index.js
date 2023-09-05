function onShareWhatsApp(platform){
    const txtToShare = document.getElementById("txtMsgToShare").value;
    console.log("txtToShare: ", txtToShare);

    if (platform == "web"){
        window.open(`https://api.whatsapp.com:/send?text= The text is ${txtToShare}`);  
    } else if(platform == "mobile") {
        window.open(`whatsapp://send?text= The text is ${txtToShare}`); 
    }
}