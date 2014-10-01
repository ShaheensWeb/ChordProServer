ChordProServer

<----

Shaheen Ghazazani
www.shaiwanghazazani.com

---->

==============
colour --> this is a downloaded module, to check out for yourself
link: https://www.npmjs.org/package/colour


Things you will find within this file;
public/ 

  index.html and other songNames.html, 
  Here were storing local versions of html for direct access via websiteName.com/songName.html
  
songs/

  text version of all songs available
  Note: These songs are not in chord pro format yet, if you open one you'll find that it is just in 
  basic format of "song lyric [D] more lyrics" and we have to format them using JavaScript before pushing to HTML.
  
server.js/

  this server is extremely basic; port locally set to 3000, using a function we fetch the txt files from the songs folder 
  and use these songs and use another function getChords(songName) to split the notes versus the lyrics(i.e chord pro) then use
  response.write(chordpro) to write both lines to HTML. The rest of the code is self explanatory. 
  
This code is primarly programmed in a way that it should be self-commenting and if you notice any errors or issues
please inform me!

Contact:
shaheenghazazani@gmail.com
