/**
 * Contact Info Section: queries and displays contact info 
 * 
 */

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import * as contactStyles from "./contact-info.module.css"
 
 const ContactInfo = () => {


  const data = useStaticQuery(graphql`
    query MyQuery {
      resumeJson {
        contact {
          email
          github
          linkedin
          phone
          stackoverflow
        }
      }
    }`
  )

   return (
    <section className={contactStyles.contact_section}>
      <h2 id="contact" className="title_large">Let's Work Together!</h2>
      <div className={`${contactStyles.main_info} ${contactStyles.info}`}>
        <div>
          <a href={`tel:${data.resumeJson.contact.phone}`}><span className="icon-phone"></span>{data.resumeJson.contact.phone}</a>
        </div>
        <div>
          <a href={`mailto:${data.resumeJson.contact.email}`}><span className="icon-mail2"></span>{data.resumeJson.contact.email}</a>
        </div>
      </div>
      <div className={`${contactStyles.link_info} ${contactStyles.info}`}>
        <div>
          <a href={data.resumeJson.contact.stackoverflow}><span className="icon-stackoverflow"></span> Stack Overflow</a>
        </div>
        <div>
        <a href={data.resumeJson.contact.github}><span className="icon-github"></span> GitHub</a>
        </div>
        <div>
          <a href={data.resumeJson.contact.linkedin}><span className="icon-linkedin"></span> LinkedIn</a>
        </div>
      </div>
    </section>
   )
 }
 
 export default ContactInfo
 