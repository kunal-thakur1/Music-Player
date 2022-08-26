let song=new Audio('Songs/song1.mp3');
let play=document.getElementById('play');
let bar=document.getElementById('range');
let pause=document.getElementById('pause');
let sound=document.getElementById('sound');
let songitems=Array.from(document.getElementsByClassName('songs'));
let playsong=Array.from(document.getElementsByClassName('musicicon'));
let pauselistsong=Array.from(document.getElementsByClassName('pausesong'));
let back=document.getElementById('back');
let next=document.getElementById('next');
let index=0;
let showsongname=document.getElementById('showsongname');
let playalecbanner=document.getElementById('playalec');
let login=document.getElementById('login');


let imgsongs=Array.from(document.getElementsByClassName('playsongviaimg'));

let allsongs = [
    {songname:"Let Me Down Slowly",path:"Songs/song1.mp3",image:"/images/songImages/song1.jpg"},
    {songname:"Adharam Madhuram",path:"Songs/song2.mp3",image:"/images/songImages/song2.jpg"},
    {songname:"Bholi Bhali Radhe ko",path:"Songs/song3.mp3",image:"/images/songImages/song3.jpg"},
    {songname:"Bholi Bhali Radhe ko",path:"Songs/song4.mp3",image:"/images/songImages/song4.jpg"},
    {songname:"Kanhaiya Kanhaiya Pukara",path:"Songs/song5.mp3",image:"/images/songImages/song5.jpg"},
    {songname:"Aisi Lagi lagan",path:"Songs/song6.mp3",image:"/images/songImages/song6.jpg"},
    {songname:"Achyutam Keshavam",path:"Songs/song7.mp3",image:"/images/songImages/song7.jpg"},
    {songname:"Man Basiya-O Kanha",path:"Songs/song8.mp3",image:"/images/songImages/song8.jpg"},
    {songname:"Maharaas",path:"Songs/song9.mp3",image:"/images/songImages/song9.jpg"},
    {songname:"Tum Prem ho Tum",path:"Songs/song10.mp3",image:"/images/songImages/song10.jpg"},
    {songname:"Radha ke sang me aaj",path:"Songs/song11.mp3",image:"/images/songImages/song11.jpg"},

    {songname:"2002-AnneMarie",path:"Songs/song12.mp3",image:"/images/songImages/song12.jpg"},
    {songname:"Rockabye-AnneMarie",path:"Songs/song13.mp3",image:"/images/songImages/song13.jpg"},
    {songname:"Kya mujhe Pyar hai",path:"Songs/song14.mp3",image:"/images/songImages/song14.jpg"},
    {songname:"Sach keh rha hai",path:"Songs/song15.mp3",image:"/images/songImages/song15.webp"},
    {songname:"Dil Ibadat kar rha hai",path:"Songs/song16.mp3",image:"/images/songImages/song16.jpg"},
    {songname:"Tu hi meri shab hai",path:"Songs/song17.mp3",image:"/images/songImages/song17.jpg"},
    {songname:"Zara Sa",path:"Songs/song18.mp3",image:"/images/songImages/song18.jpg"},
    
    
    {songname:"Duniya",path:"Songs/song19.mp3",image:"/images/slider_song_images/slidesong1.jpg"},
    {songname:"Kesariya",path:"Songs/song20.mp3",image:"/images/slider_song_images/slidesong2.jpg"},
    {songname:"Dilbar",path:"Songs/song21.mp3",image:"/images/slider_song_images/slidesong3.jpg"},
    {songname:"Tera Hua",path:"Songs/song22.mp3",image:"/images/slider_song_images/slidesong4.jpg"},
    {songname:"Chitta",path:"Songs/song23.mp3",image:"/images/slider_song_images/slidesong5.jpg"},
    {songname:"Tumse Bhi Zyada-Tadap",path:"Songs/song24.mp3",image:"/images/slider_song_images/slidesong6.jpg"},
    {songname:"Mohabbat-Filhal2",path:"Songs/song25.mp3",image:"/images/slider_song_images/slidesong7.jpg"},
    {songname:"Barish",path:"Songs/song26.mp3",image:"/images/slider_song_images/slidesong8.jpg"},
]


//login system
login.addEventListener('click',()=>{
    let name=document.getElementById('name').value;
    let head=document.getElementById('mainheading');
    let container=document.getElementById('maincontainer');
    let loginpage=document.getElementById('loginpage');
    let areatodisplayname=document.getElementById('showusername');
    if(name=="")
    {
        alert("Please Enter Your User Name To Enjoy KT-muSic");
    }
    else
    {
        areatodisplayname.innerHTML=name;
        head.style.display='';
        container.style.display='';
        loginpage.style.display='none';
    }
})



//play songs through images
imgsongs.forEach((element,i)=>{
    element.addEventListener('click',()=>{
        index=18+i;
        playsongthimg();
    })
})
function playsongthimg()
{
    pauseprevsong();
    displaysongname();
    playsong[index].style.display='none';
    pauselistsong[index].style.display='';
    song.src=allsongs[index].path;
    song.currentTime=0;
    play.style.display='none';
    pause.style.display='';
    sound.style.opacity=1;
    song.play();
}



//helps us to play the song from the main play icon
play.addEventListener('click', ()=>{
    if(index==0)
    {
        pausebanbutton();
    }
   if(song.paused || song.currentTime==0)
   {
       playindicon();
       displaysongname();
       song.play();
       play.style.display='none';
       pause.style.display='';
       sound.style.opacity=1;

   }
})

function pausebanbutton()
{
    playalecbanner.innerHTML="Pause";
    displaysongname();
}




//pause the song from the main pause icon
pause.addEventListener('click', ()=>{
    if(song.play)
    {
        if(index==0)
        {
            showplayban();
        }
        pauseindicon();
        song.pause();
        play.style.display='';
        pause.style.display='none';
        sound.style.opacity=0;
    }
})

function showplayban()
{
    playalecbanner.innerHTML='Play';
    displaysongname();
}






//helps us to increase the bar with the song 
song.addEventListener('timeupdate', ()=>{
    time=parseInt((song.currentTime/song.duration)*100);
    bar.value=time;
})



//helps us to play the song from ...where we drag the bar 
bar.addEventListener('change',()=>{
    song.currentTime=bar.value * song.duration/100;
})



//helps us to set the image,songname to its right position
songitems.forEach((element,i)=>{
    element.getElementsByClassName('songposter')[0].src = allsongs[i].image;
    element.getElementsByClassName('songname')[0].innerText=allsongs[i].songname;
})



//helps with the icons to cordinate with each other
const pauseprevsong =()=>{
    pauselistsong.forEach((element)=>{
        element.style.display='none';
    })
    playsong.forEach((element)=>{
        element.style.display='';
    })
    play.style.display='';
    pause.style.display='none';
}

function playbanbutton()
{
    playalecbanner.innerHTML='Pause';
    pauseprevsong();
    displaysongname();
    playsong[0].style.display='none';
    pauselistsong[0].style.display='';
    song.src=allsongs[0].path;
    song.currentTime=0;
    play.style.display='none';
    pause.style.display='';
    sound.style.opacity=1;
    song.play();
}

//play the songs from the all songs small icons individual 
playsong.forEach((element,i)=>{
    element.addEventListener('click',()=>{
        index=i;
        if(index==0)
        {
            playbanbutton();
            
        }
        else
        {
            showplayban();
            pauseprevsong();
            displaysongname();
            playsong[i].style.display='none';
            pauselistsong[i].style.display='';
            song.src=allsongs[i].path;
            song.currentTime=0;
            play.style.display='none';
            pause.style.display='';
            sound.style.opacity=1;
            song.play();
        }
    
 })
})



//display the song name which is currently playing
function displaysongname()
{
    showsongname.innerHTML=allsongs[index].songname;
}


//pause the song from the all songs icons
pauselistsong.forEach((element,i)=>{
    element.addEventListener('click',()=>{
    index=i;
    if(index==0)
    {
        pausebanbutton();
        displaypauseban();
    }
    else
    {
        
        sound.style.opacity=0;
        play.style.display='';
        pause.style.display='none';
        playsong[i].style.display='';
        pauselistsong[i].style.display='none';
        song.src=allsongs[i].path;
        song.currentTime=bar.value * song.duration/100;
        song.pause();
    }
    
 })
})


function displaypauseban()
{
    playalecbanner.innerHTML='Play';
    pauseprevsong();
    displaysongname();
    playsong[0].style.display='';
    pauselistsong[0].style.display='none';
    song.src=allsongs[0].path;
    song.currentTime=0;
    play.style.display='';
    pause.style.display='none';
    sound.style.opacity=0;
    song.pause();
}


//show the pause individual icon when click on main pause icon
function pauseindicon()
{
    
    playsong[index].style.display='';
    pauselistsong[index].style.display='none';
}



//show the play individual icon when click on main play icon
function playindicon()
{
    
    playsong[index].style.display='none';
    pauselistsong[index].style.display='';
}

//play next song function
next.addEventListener('click',()=>{
    if(index>126)
    {
        index=26;
    }
    else
    {
        index=index+1;
    }
    displaysongname();
    pauseprevsong();
    playsong[index].style.display='none';
    pauselistsong[index].style.display='';
    song.src=allsongs[index].path;
    song.currentTime=0;
    play.style.display='none';
    pause.style.display='';
    sound.style.opacity=1;
    song.play();
})





//play previous song function
back.addEventListener('click',()=>{
    if(index==1)
    {
        index=0;
        playbanbutton();
    }
    if(index<0)
    {
        index=0;
    }
    else
    {
        index=index-1;
    }
    displaysongname();
    pauseprevsong();
    playsong[index].style.display='none';
    pauselistsong[index].style.display='';
    song.src=allsongs[index].path;
    song.currentTime=0;
    play.style.display='none';
    pause.style.display='';
    sound.style.opacity=1;
    song.play();
    
})






//play let me down slowly from banner play button
playalecbanner.addEventListener('click',()=>{
    let v=playalecbanner.innerHTML;
    if(index!=0)
    {
        index=0;
        displaysongname();
    }
    if(v=="Play")
    {
        pauseprevsong();
        displaysongname();
        playsong[0].style.display='none';
        pauselistsong[0].style.display='';
        song.src=allsongs[0].path;
        song.currentTime=0;
        play.style.display='none';
        pause.style.display='';
        sound.style.opacity=1;
        playalecbanner.innerHTML='Pause';
        song.play();
    }
    if(v=="Pause")
    {
    displaysongname();
    playalecbanner.innerHTML='Play';
    sound.style.opacity=0;
    play.style.display='';
    pause.style.display='none';
    playsong[0].style.display='';
    pauselistsong[0].style.display='none';
    song.src=allsongs[0].path;
    song.currentTime=bar.value * song.duration/100;
    song.pause();
    }
    
    
})