import {faqs} from '../fixtures/faqs'
import {Accordion} from '../components'

export const FaqsContainer = () => {
 return (
  <Accordion>
   <Accordion.Title>Frequently Asked Questions</Accordion.Title>
   <Accordion.Frame>
    
   {faqs.map(faq => (
    <Accordion.Item key={faq.id}>
     <Accordion.Header>{faq.header}</Accordion.Header>
     <Accordion.Body>{faq.body}</Accordion.Body>
    </Accordion.Item>
   ))}
   </Accordion.Frame>
  </Accordion>
 )
}