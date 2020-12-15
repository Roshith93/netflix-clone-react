import {faqs} from '../fixtures/faqs'
import {Accordion, OptForm} from '../components'

export const FaqsContainer = () => {
 return (
  <Accordion>
   <Accordion.Title>Frequently Asked Questions</Accordion.Title>
    
   {faqs.map(faq => (
    <Accordion.Item key={faq.id}>
     <Accordion.Header>{faq.header}</Accordion.Header>
     <Accordion.Body>{faq.body}</Accordion.Body>
    </Accordion.Item>
   ))}
   <OptForm>
    <OptForm.Input placeholder="Email Address"/>
    <OptForm.Button>Try it now</OptForm.Button>
    <OptForm.Text>Ready to watch? Enter your Email </OptForm.Text>
   </OptForm>
  </Accordion>
 )
}