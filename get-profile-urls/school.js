// copy paste this whole file and run in the inspector.
// useful for viewing Alumni in a cleaner way than the annoying "People you may know" cards
// compatible pages: https://www.linkedin.com/school/...
(() => {
  const cards = document.querySelectorAll('ul li .artdeco-card');
  
  const urls = [];
  
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
    
    urls.push(href);
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
