export function pullLyrics(artist_id: string){
    var accessToken="8siic_Tz7ca_5WivEaYKIqgAjBLmX9GfeKzCSMCgufiSJiQzepOH38mirlCMK9BW"
}

function grabURLs(artist_id: string){
    var pageNum = 1;
    var pageMax = 5 
    var songIDs:string[] =[]
    while (pageNum < pageMax){
        fetch("https://api.genius.com/search?q="+artist_id+"&page="+pageNum+"&access_token=8siic_Tz7ca_5WivEaYKIqgAjBLmX9GfeKzCSMCgufiSJiQzepOH38mirlCMK9BW")
        .then(response=>response.json())
        .then(data=>{
            for (var id of data.response.hits){
                songIDs.push(id.url);
            }
        })
        //make async
        pageNum++;
    }
    return songIDs;
}

function grabSongs(songList:string[]){
   
}