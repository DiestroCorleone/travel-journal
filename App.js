import React from "react";
import Navbar from "./components/Navbar";
import BlogEntry from "./components/BlogEntry";
import Footer from "./components/Footer"
import data from "./data";

export default function App() {
    const entries = data.map(entry => {
        return <BlogEntry
                    {...entry}
                />
    });
    
    return(
        <div className="app-container">
            <Navbar />
            <div className="blog-entry-container">
                {entries}
            </div> 
            <Footer />
        </div>
    );
}