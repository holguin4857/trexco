
export default function Footer () {
    return ( 
        <>
         <article className='footer'>
        <div className='columns'>
        <article className="column">
          <h3>FAQ</h3>
          <ul>
              <li link href='#faq'>FAQ</li>
              <li link href='#how'>How it works</li>
              <li link href='#contact'>Contact us</li>
          </ul>
        </article>
        <article className="column">
          <h3>terms</h3>
          <ul>
              <li link href='#prohibited'>Prohibited items</li>
              <li link href='#privacy'>Privacy policy</li>
              <li link href='#terms'>Terms & conditions</li>
            </ul>   
        </article>
        </div>
      </article>
        
        </>
    )
}