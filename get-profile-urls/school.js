// copy paste this whole file and run in the inspector.
// useful for viewing Alumni in a cleaner way than the annoying "People you may know" cards
// compatible pages: https://www.linkedin.com/school/...
(() => {
  const cards = document.querySelectorAll('ul li .artdeco-card');
  
  const urls = [
    'Link,First name,Last name'
  ];
  
  let succeeded = 0;
  let failed = 0;
  
  for(const card of cards) {
    const link = card.querySelector('a');
    
    if(!link) {
      console.log(`Couldn't parse a profile because there was no link inside the card.`);
      failed += 1;
      continue;
    }
    
    const href = `${link.protocol}//${link.hostname}${link.pathname}`;
    
    let first_name = '';
    let last_name = '';
    
    const name_element = card.querySelector('.artdeco-entity-lockup__title');
    
    if(name_element) {
      const name = name_element.textContent.trim();
      
      first_name = name.split(' ')[0]; // just first word counts as first name
      last_name = name.split(' ').slice(1).join(' '); // all other names go to last name
    }
    
    urls.push(`${href},${first_name},${last_name}`);
    succeeded += 1;
  }
  
  console.log(`Parsed ${urls.length} profiles.`);
  console.log(`Here are your urls:`);
  console.log(urls.join('\n'));
  if(failed > 0) {
    console.log(`${failed} profiles failed to parse. If this is unusually high, it could be that LinkedIn's design has changed. Consider editing this script and opening a PR if you know how to code.`);
  } else {
    console.log(`Btw, there weren't any parsing issues.`);
  }
})();
