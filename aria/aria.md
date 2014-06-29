ARIA
by Daniel Stepp

I.

Chapter One

Three twenty-six. Am. The time on the clock was exactly as it had just been in his dream. That mysterious detail gave him pause until he felt the idea fading from his memory. He refocused on it. Upright in bed. In the dark. He fumbled for his laptop on the nightstand and found it underneath Myshkin, who hissed at him and slunk underneath the bed.

Text. Image. Sound. Video. Graphics. At least conceptually the mediums of modern communication had reached stasis. What was left to discover after you had reproduced the natural world in a computer simulation? It was not perfect (yet) but there was an unspoken agreement that it had all been discovered. There was no longer a need for explorers, only map-makers. But to Will an idea had come, something vague but compelling. Something emergent from those existing forms. Something new.

From his day job at a San Francisco-based social network named FaceSpace he understood the layers of abstraction that allowed a computer to interpret words, images, sounds, video. All these mediums were stored in blocks of raw bits of data called files. The data in the files were organized by agreed-upon protocols with names like Unicode, ASCII, JPEG, PNG, GIF, MP3, MPEG that allowed them to be passed around through storage mediums like hard discs or through networks and reassembled, reinterpreted by other systems in the correct way. This meant you could take a photo on your 2013 iPhone 5S of student riots in Santiago, Chile, upload it to FaceSpace and someone on the other side of the world, in Shanghai, China, could log in and download the photo on their 1992 ThinkPad.

None of this was very complicated. But understanding it at that basic level was the first step leading to the idea. That all forms of communication at the lowest level were the same bits, only reinterpreted differently based on a agreed-upon protocol that a multitude of computer systems could parse in the same way. "Ones and zeros", they said, "all the way down."

His Macbook was almost out of power so he quickly opened Sublime Text and jotted down some quick notes, visions from his dream, and saved the file to the desktop under the name "aria-notes.txt". Once the ideas were down and saved he was relieved, but continued to write until the screen turned black and he had to get out of bed to plug it in.

This was not the first time an idea had occurred to him in the middle of the night and many times before he had lost it by not getting it out in time. Sometimes the next morning the idea seemed stupid, conventional, incoherent. But occasionally it was something good. Either a solution to a problem at work or some new idea for a game, which he liked to work on in his spare time.

After the first round of notes were saved he went downstairs and poured and made a cup of Earl Grey, with just a tad of agave and some skim milk. His brain was spinning at all the possibilities and instead of calming down he was becoming more and more awake. He went back upstairs and set up the computer at his desk by the window. He opened the window and let the cool air in. Outside he saw the valley, the lights, and imagined all the people sleeping. It was for them in the end. That was not the force that drove him at all. But he acknowledged the fact of it and went on with his work.

The second realization was that the ones and zeros were much like the building blocks of life. "Atoms all the way down." A hydrogen atom did not know whether it was a part of a volcano or a blue jay. It just did its thing at the level it existed. It was for the higher levels of organization to decide what to do with that bit of hydrogen that more specific characteristics emerged.

Ones and zeros were the same. This bit of data did not know that it was in a YouTube video of a cat playing piano or an info graphic about the capture of Osama Bin Laden. Any meaning came at a higher level of organization, so in a real way two equivalent bits of data could be swapped. They were interchangable. 

So what if you took a stream of bits from a image file and from a video file and swapped the interpretation protocol. That is, treat an MPEG file bits like an JPEG file and vice versa. Well, that doesn't work. Clearly. To the program the file will appear corrupt. But that's only a limitation of the interpreter. If it had an awareness of the type of file it was being given (trivial to implement) it could transform the bits into a format it could  process to the best of its ability.

Once this train of thought had begun he started to have doubts. So what? The voice in his head asked him. Is it worth losing sleep over? You have work in the morning, remember. Go back to sleep. Interesting but profoundly dumb. Silly. That's the word I was looking for. Yet he kept going.

If there was a protocol that understood all the existing file formats and could transform them on the fly into another medium, however imperfect, what would that look like? And once the transformations were seemless could could combine an arbitrary number of communication streams into one stream. And what would that one stream look like interpreted? How would it be displayed? Already he knew there would have to be another interpretation layer on top of these layers, but was not yet at the point where he could even reason about what it should be.

He decided to experiment by downloading the ffmpeg source code. There he found the complex nest of code that determined what codec to use to interpret the input file. It would take time to refactor this to his own purposes, but at least it gave him confidence it could be done. ffmpeg handled images, sound, and video, but not text at the level he needed it. That he would need to parse himself.

Perhaps he should start small. Work on a small prototype to translate two specific types into an interchangeable stream. The magnitude of the task as it became clearer to him seemed insurmountable by a single person.

By now it was after six and at the edge of the valley he could see the dawn rising over the mountains. Traffic was increasing on the roads. Myshkin was now awake and rubbing at his legs. He had not much sleep. He thought to call into work, but decided to go in anyway as there was a weekly meeting to attend and for some reason he thought Derek might have some insights.

He saved the file again and saw the name, *aria-notes.txt*. The woman in his dream had called it the Aria. He remembered the way she had been. Their connection and their wordless way of communicating. It was song-like, but more than that it was the exhilaration he felt, a melting happiness that came over him. He saw into her past and understood what she meant with a single wave of her fingers.

Will became lost in the dream once more and knew this dream would not fade as others had. He glanced at a book on the bookshelf next to his desk and pulled it down. For some reason he thought it would come in handy as things progressed. It was a book he had bought when first learning to write software, "Fractal Programming in C".

He closed his computer and got ready for work.

-

There in his cubicle on the floor where all the backend guys worked (his team) he went through the daily backlog list and reviewed the tasks assigned to him. His work was maintaining and developing the software that ran jobs to convert all the various media files that were uploaded to FaceSpace on a daily basis. Millions of files went through the system per day. It was not the sexy work that the front-end guys had - the features that people passionately supported or hated. His was the type of work that did best when you didn't notice it was there. This anonymity appealed to his personality.

The most interesting work his team did these days was coming up with optimizations to process more files per minute. He had come up with an algorithm himself that increased the FPM by 25%, an accomplishment that had won him a sit-down with the CEO and a handful of stock options that would vest in four years.

Before the eleven thirty weekly standup he went to the kitchen to grab a third cup of coffee. Distracted, he spooned too much sugar into the cup and dumped it into the sink. Pot empty and not enough time to make another, Will hurried to the meeting. Already he was feeling the lack of sleep from the night before.

Packed into a small conference room the managers and team leads from various departments huddled around a digital projector. The leads took turns hooking their laptops to the projector and presenting a quick powerpoint to the others, catching them up on progress, roadblocks, and the task burn down chart for their team. Everyone nodded and pretended like they understood what the leads presented. Most of the time the presentations seemed irrelevant, at too low of level for anyone to grasp the relevance to the overall picture. But no one seemed to care enough to criticise.

It came time for Will's team to present and normally Will was the one who presented. He had forgotten his laptop at this desk this morning and so the team manager, Blake, fumbling at his laptop, gave a somewhat coherent overview of their current goals. A major refactoring of the old video processor, moving towards multi-threaded processing that could improve their throughput by as much as fifty percent, taking full advantage of all CPU cores on their servers.

"Will," Blake said, turning to him in a moment of hesitation on some figures, "you mentioned earlier this week about being somewhat blocked on the deployment to the staging server. What is the status of that? We need to move into integration testing ASAP."

But Will was not paying any attention. His mind was on the idea, a new connection had been made in his mind, something he needed to run by Derek.

Blake called out his name several times and got no response until he reached out and shook his arm. Will became aware and everyone laughed.

"What was that?"

"The status of the staging server deployments. You told me you were blocked there by the Ops team. Is that something that has been resolved?"

"No, I meant to get on that today."

After the meeting Blake pulled Will aside.

"Hey, you okay?"

"Yeah," Will said, "I'm good, got a lot on my mind."

"Family stuff, your girlfriend?"

"Sure, family stuff. You know how it is."

"Sure. But at least try to focus during the standup. We need to come off like we know what we're doing so the higher-ups don't start micro-managing things. Cool?"

"Cool."

Blake gave Will an ironic two thumbs up and walked over to the Ops team cubicles, which were next to the conference room. Will took off to find Derek, which being close to lunchtime he knew would be in the cafeteria line.

FaceSpace kept a Michelin-star chef on staff at all times at the headquarters. An extravagance that had been well documented in the tech press. Food was free, abundant, and almost too good. Will had gained ten pounds since he started a couple years ago.

Derek was there, in line, just as Will knew he would be. Today was Asian-Fusion Thursday. Will took a chance and broke in line just behind Derek. The guy he broke in front of was too busy staring into his smartphone to notice.

"The tempeh shrimp pasta is supposed to be tasty," Will said.

Derek glanced over his shoulder, "I'm staying away from carbs and fried food. Unhealthy you know."

"Live a little."

"Okay," Derek said, "you talked me into it."

As they approached the servers, Derek and Will both order the pasta and sat down together next to a window overlooking a grassy park area with a natural fountain.

"Haven't seen you in awhile. What's happening man?"

"I'm here on business."

"Oh yeah?" Derek said, "Sounds intriguing."

"Mind if I bounce some idea off you?"

"Shoot. But I warn you, I might talk with my mouth full."

"This one has potential, man. This one is different. I'm really excited about it."

"Domain?"

"Media." Will said, "Communication really."

"An optimization? New compression algorithm? Filters? What?"

"No, something different."

"What do you mean?"

"It's hard to say at this point. I just had the idea last night. Came to me in a dream."

"This has to be good."

"Never mind that. What I wanted to ask you is, what if I asked you the plausibility of realtime cross-media transformations, from a computational perspective?"

"What the fuck does that mean?"

"Just what I said. Let's say I wanted to convert images to sound files, sound files to images, video files to sound files, text even. All combinations of any media we currently support on the FaceSpace platform. So excluding 3D."

"Oh well that's easy then, if you exclude 3D."

"Stop fucking around, I'm serious."

"How can I not fuck around, what you're saying isn't logical. Why would you convert a sound file to an image? Conceptually it doesn't make sense. It's like asking me, why is the grass red?"

"Just bear with me."

"The grass is green."

"I know it is, humor me."

"Well, assuming you don't care what the output is, which is the biggest red flag in my opinion, as long as the converter understood how to parse the source into something that can be translated into the target, you could do it in realtime, as a stream at least. Modern computers are that fast for sure, even a smartphone. If we're talking just images, sound, video."

"Of course," Will said, "and text."

"You're weird."

They sat in silence. Ate their pasta. Then Will got up.

"I'm going to text you tonight. Think I might have a proof of concept by then."

"Well, I have to say, you've got the mystery part down. I'm on the edge of my seat."

"One more question. If you wanted to do something like this, and utilize existing software as much as possible, what libraries would you think to use?"

"ffmpeg? Definitely would keep it in C, cause you'll want as much performance as you can get. Plus you get the cross-platform-ability, which is a must for a communication medium."

"Cool. Thanks for the input. I'll text you later. Might be late."

"No problem," Derek saluted, "By the way this pasta is good. So much for my calorie count."

Will walked out of the cafeteria and returned to his cubicle. He wrote an email.

	Blake, man I need to take care of some family stuff. Going to 	
	work from home the rest of the day. Ping me if you need
	something. I'll be on chat. Will update you on the Ops
	deployment stuff.

Then he packed his things and left. Driving home as fast as possible, he even ran a red light and almost hit a guy in speedos riding a road bike.

-

Myshkin was out of food. Will opened a can of tuna and gave him that instead. No time to go to the store. Not now. The idea was swimming in his brain. All the pieces floating. He was afraid they would disappear if he didn't act right away. He closed all the windows, pulled the shades, and lit a single candle on his desk. Shut off his phone. He needed focus. To get in deep. He opened Sublime Text with the notes he had taken the night before. Tuned Pandora to the Brian Eno channel. Neroli played. And he began.

In Xcode he began a new C program, empty. He then imported the ffmpeg source and got it linked, and was able to call functions from main. From there he was able to write an intelligent converter that was aware of specific media files (mp3, mpeg4, jpeg to begin with) and could transform between them. To make things easier he just got the basic file data itself into a format the expecting protocol could understand. He didn't try to manipulate the data at this point. He didn't want to get bogged down. At this point the big picture was the vital thing. Details could come later. He needed to prove conceptually that the idea was sound.

"Grass is green," he whispered as he typed.

A few hours later, at 9pm, he had something resembling a proof of concept. It could take in a file in any of the hard-coded formats and arbitrarily convert them and then present the transformed file in the new format. 

He held his breath as he started the program with a test JPG, his cat Myshkin when he was just born, asleep on Will's knee. The program ran quick. Not doing much at this point it was expected. He could control what format the final output was. He went through sound and video. Both came out like noise, a jumbled chaotic mess. And yet, he had done it. It worked, somewhat.

Will sat back in his chair. The cat rose from behind the computer and bowed in front of Will, wanting to be petted. Will stroked his neck and ears. Myshkin closed his eyes with pleasure.