type Header = {
    id: number;
    section: string;
    logo: {
        imgURL: string;
        imgALT: string;
        link: string;
        height: string;
        width: string;
    };
}

type Logo = {
    imgURL: string;
    imgALT: string;
    link: string;
    height: string;
    width: string;
}
type Slide = {
    itemTitle: string;
    itemText: string;
}

export default async function Header() {
    
    const response = await fetch("http://localhost:3000/api", {
        cache: "no-cache"
    })
    const data = await response.json();
    const headerData = data.filter((data:any) => data.section == 'header')
    const logo = headerData[0].logo;
   
    return (
        <div className="header">
            <a href={logo.link} className="logo">
                <img src={logo.imgURL} alt={logo.imgALT} width={logo.width} height={logo.height}/>
            </a>            
        </div>
    )
}