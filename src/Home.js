function Home(){
    return(
        <div style = {{
            marginBottom: "12px",
            paddingLeft: "100px",
            height: "80vh"
        }}>
            <p>Welcome to my application!</p>
            <p>WARNING:</p>
            <article align="left">
                This application is currently incomplete.  It is either still in development (a rough draft of the final version), or this project has been abandoned.
                </article>
                <img 
                src="https://www.scottcountyiowa.gov/sites/default/files/images/news/constructiondude.png" 
                alt="Under_Construction"/>
        </div>
    );
}

export default Home;