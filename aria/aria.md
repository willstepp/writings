ARIA
by Daniel Stepp

I.

Chapter One

Three twenty-six. Am. The time on the clock was exactly as it had just been in his dream. That mysterious detail gave him pause until he felt the idea fading from his memory. He refocused on it. Upright in bed. In the dark. He fumbled for his laptop on the nightstand and found it underneath Myshkin, who hissed at him and slunk underneath the bed.

Text. Image. Sound. Video. Graphics. At least conceptually the mediums of modern communication had reached stasis. What was left to discover after you had reproduced the natural world in a computer simulation? It was not perfect (yet) but there was an unspoken agreement that it had all been discovered. There was no longer a need for explorers, only map-makers. But to Will an idea had come, something vague but compelling. Something emergent from those existing forms. Something new.

From his day job at a San Francisco-based social network named FaceSpace he understood the layers of abstraction that allowed a computer to interpret words, images, sounds, video. All these mediums were stored in blocks of raw bits of data called files. The data in the files were organized by agreed-upon protocols with names like Unicode, ASCII, JPEG, PNG, GIF, MP3, MPEG that allowed them to be passed around through storage mediums like hard discs or through networks and reassembled, reinterpreted by other systems in the correct way. This meant you could take a photo on your 2013 iPhone 5S of student riots in Santiago, Chile, upload it to FaceSpace and someone on the other side of the world, in Shanghai, China, could log in and download the photo on their 1992 ThinkPad.

None of this was very complicated. But understanding it at that basic level was the first step leading to the idea. That all forms of communication at the lowest level were the same bits, only reinterpreted differently based on a agreed-upon protocol that a multitude of computer systems could parse in the same way. "Ones and zeros", they said, "all the way down."

His Macbook was almost out of power so he quickly opened Sublime Text and jotted down some quick notes, visions from his dream, and saved the file to the desktop under the name "aria-notes.txt". Once the ideas were down and saved he was relieved, but continued to write until the screen turned black and he had to get out of bed to plug it in.

This was not the first time an idea had occurred to him in the middle of the night and many times before he had lost it by not getting it out in time. Sometimes the next morning the idea seemed stupid, conventional, incoherant. But occasionally it was something good. Either a solution to a problem at work or some new idea for a game, which he liked to work on in his spare time.

After the first round of notes were saved he went downstairs and poured and made a cup of Earl Grey, with just a tad of agave and some skim milk. His brain was spinning at all the possibilities and instead of calming down he was becoming more and more awake. He went back upstairs and set up the computer at his desk by the window. He opened the window and let the cool air in. Outside he saw the valley, the lights, and imagined all the people sleeping. It was for them in the end. That was not the force that drove him at all. But he acknowledged the fact of it and went on with his work.

The second realization was that the ones and zeros were much like the building blocks of life. "Atoms all the way down." A hydrogen atom did not know whether it was a part of a volcano or a blue jay. It just did its thing at the level it existed. It was for the higher levels of organization to decide what to do with that bit of hydrogen that more specific characteristics emerged.

Ones and zeros were the same. This bit of data did not know that it was in a YouTube video of a cat playing piano or an info graphic about the capture of Osama Bin Laden. Any meaning came at a higher level of organization, so in a real way two equivalent bits of data could be swapped. They were interchangable. 

So what if you took a stream of bits from a image file and from a video file and swapped the interpretation protocol. That is, treat an MPEG file bits like an JPEG file and vice versa. Well, that doesn't work. Clearly. To the program the file will appear corrupt. But that's only a limitation of the interpreter. If it had an awareness of the type of file it was being given (trivial to implement) it could transform the bits into a format it could  process to the best of its ability.

Once this train of thought had begun he started to have doubts. So what? The voice in his head asked him. Is it worth losing sleep over? You have work in the morning, remember. Go back to sleep. Interesting but profoundly dumb. Silly. That's the word I was looking for. Yet he kept going.

If there was a protocol that understood all the existing file formats and could transform them on the fly into another medium, however imperfect, what would that look like? And once the transformations were seemless could could combine an arbitrary number of communication streams into one stream. And what would that one stream look like interpreted? How would it be displayed? Already he knew there would have to be another interpretation layer on top of these layers, but was not yet at the point where he could even reason about what it should be.

He decided to experiment by downloading the ffmpeg source code. There he found the complex nest of code that determined what codec to use to interpret the input file. It would take time to refactor this to his own purposes, but at least it gave him confidence it could be done. ffmpeg handled images, sound, and video, but not text at the level he needed it. That he would need to parse himself.

Perhaps he should start small. Work on a small prototype to translate two specific types into an interchangeable stream. The magnitude of the task as it became clearer to him seemed insurmountable by a single person.

By now it was after six and at the edge of the valley he could see the dawn rising over the mountains. Traffic was increasing on the roads. Myshkin was now awake and rubbing at his legs. He had not much sleep. He thought to call into work, but decided to go in anyway as there was a weekly meeting to attend and for some reason he thought Derek might have some insights.

He saved the file again and saw the name, aria-notes. The woman in his dream had called it the Aria. He remembered the way she had been. Their connection and their wordless way of communicating. It was song-like, but more than that it was the exhilaration he felt, a melting happiness that came over him. He saw into her past and understood what she meant with a single wave of her fingers.

Will became lost in the dream once more and knew this dream would not fade as others had. He glanced at a book on the bookshelf next to his desk and pulled it down. For some reason he thought it would come in handy as things progressed. It was a book he had bought when first learning to write software, "Programming Fractal Algorithms."

He closed his computer and got ready for work.

-

There in his cubicle on the floor where all the backend guys worked (his team) he went through the daily backlog list and reviewed the tasks assigned to him. His work was maintaining and developing the software that ran jobs to convert all the various media files that were uploaded to FaceSpace on a daily basis. Millions of files went through the system per day. It was not the sexy work that the front-end guys had, the features that people passionately supported or hated. His was the type of work that did best when you didn't even notice it was there. This appealed to him. He was good at it. The most interesting work they did these days was coming up with optimizations to process more files per minute. He had come up with an algorithm himself that increased the FPM by 25%, an accomplishment that had won him a meeting with the CEO and a handful of stock options that would vest in four years.

Before the eleven thirty standup he went to the kitchen and grabbed his third cup of coffee. Already he was feeling the lack of sleep.