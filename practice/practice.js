
function checkAnchors(){

    const links = document.getElementsByClassName("a-link");
    const altLinks = $(".a-link");
    
    console.log(links[0].hasAttribute("class"), altLinks);

    let i = -1;
    setInterval(()=>{

        i++;

        if(i == 4){
            i = 0
        };

        for(let j = 0; j < altLinks.length; j++){
            altLinks.eq(j).html("Hello");
        }

        altLinks.eq(i).html("Hi");

        console.log($(".a-link").eq(1).text());

    },1000);
};


function clickAnchor(){
    const links = $(".a-link");
    
    Array.from(links).forEach( (link, index) => {
        console.log(link)
        links.eq(index).on("click", (event)=>{
            event.preventDefault();
            
            for(let i = 0; i < links.length; i++){
                links.eq(i).html("Hello");
            };

            event.target.innerHtml = "Hi";
        });
    });
};

clickAnchor();