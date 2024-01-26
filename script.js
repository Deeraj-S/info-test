function changebg(bg,title){
    const banner=document.querySelector('.banner');
    const contents=document.querySelectorAll('.content');
    banner.style.background = 'url("./images/movie/' + bg + '")';
    banner.style.backgroundSize='cover';
    banner.style.backgroundPosition='center';

    contents.forEach(content=>{
        content.classList.remove('active');
        
    });

    

    

    const selectedContent=document.querySelector('.content.'+title);
    if(selectedContent){
        selectedContent.classList.add('active');
    }else {
        // If the selected content doesn't exist, activate the default content
        const defaultContent = document.querySelector('.content.the-little-mermaid');
        if (defaultContent) {
            defaultContent.classList.add('active');
        }
    }
}

// function initializePage() {
//     const defaultContent = document.querySelector('.content.the-little-mermaid');
//     if (defaultContent) {
//         defaultContent.classList.add('active');
//     }
    
// }

// document.addEventListener('DOMContentLoaded', initializePage);

//