function Contact() {
    return (
      <div>
        {/* creating grid   */}
        <div className="grid grid-cols-2"> 


          {/* first box */}
          <div className="bg-red-400 h-[35rem]">
            <h1 className="text-[3rem]">Contact</h1>
          </div> 


          {/* second box */}
          <div className="bg-green-400 row-span-2">02</div>



          {/* third box */}
          <div className="bg-yellow-400 h-[5rem]">03</div>   
          


        </div>
      </div>
    );
  }
  
  export default Contact;
  