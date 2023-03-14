import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, styled, Typography } from "@mui/material";
import { Box } from "@mui/material";

const rawData = `[{"q":"Many people spend more time looking at their failures than focusing on their successes.","a":"Lolly Daskal","c":"87","h":"<blockquote>&ldquo;Many people spend more time looking at their failures than focusing on their successes.&rdquo; &mdash; <footer>Lolly Daskal</footer></blockquote>"},{"q":"Nothing external to you has any power over you.","a":"Ralph Waldo Emerson","c":"47","h":"<blockquote>&ldquo;Nothing external to you has any power over you.&rdquo; &mdash; <footer>Ralph Waldo Emerson</footer></blockquote>"},{"q":"Adventure is not outside man; it is within.","a":"George Eliot","c":"43","h":"<blockquote>&ldquo;Adventure is not outside man; it is within.&rdquo; &mdash; <footer>George Eliot</footer></blockquote>"},{"q":"The wise warrior avoids the battle.","a":"Sun Tzu","c":"35","h":"<blockquote>&ldquo;The wise warrior avoids the battle.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>"},{"q":"If you're brave enough to say goodbye, life will reward you with a new hello.","a":"Paulo Coelho","c":"77","h":"<blockquote>&ldquo;If you're brave enough to say goodbye, life will reward you with a new hello.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"},{"q":"The future is the worst thing about the present.","a":"Gustave Flaubert","c":"48","h":"<blockquote>&ldquo;The future is the worst thing about the present.&rdquo; &mdash; <footer>Gustave Flaubert</footer></blockquote>"},{"q":"The only people without problems are those in cemeteries.","a":"Tony Robbins","c":"57","h":"<blockquote>&ldquo;The only people without problems are those in cemeteries.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"},{"q":"Work joyfully and peacefully, knowing that right thoughts and right efforts inevitably bring about right results.","a":"James Allen","c":"113","h":"<blockquote>&ldquo;Work joyfully and peacefully, knowing that right thoughts and right efforts inevitably bring about right results.&rdquo; &mdash; <footer>James Allen</footer></blockquote>"},{"q":"If you've never eaten while crying you don t know what life tastes like.","a":"Johann Wolfgang von Goethe","c":"72","h":"<blockquote>&ldquo;If you've never eaten while crying you don t know what life tastes like.&rdquo; &mdash; <footer>Johann Wolfgang von Goethe</footer></blockquote>"},{"q":"If you want something you've never had you must be willing to do something you've never done.","a":"Thomas Jefferson","c":"93","h":"<blockquote>&ldquo;If you want something you've never had you must be willing to do something you've never done.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>"},{"q":"Don't let the past steal your present.","a":"Cherralea Morgen","c":"38","h":"<blockquote>&ldquo;Don't let the past steal your present.&rdquo; &mdash; <footer>Cherralea Morgen</footer></blockquote>"},{"q":"Circumstances rule men; men do not rule circumstances. ","a":"Herodotus","c":"55","h":"<blockquote>&ldquo;Circumstances rule men; men do not rule circumstances. &rdquo; &mdash; <footer>Herodotus</footer></blockquote>"},{"q":"Confidence is the greatest friend.","a":"Lao Tzu","c":"34","h":"<blockquote>&ldquo;Confidence is the greatest friend.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>"},{"q":"Only the educated are free.","a":"Epictetus","c":"27","h":"<blockquote>&ldquo;Only the educated are free.&rdquo; &mdash; <footer>Epictetus</footer></blockquote>"},{"q":"Better to die fighting for freedom than be a prisoner all the days of your life.","a":"Bob Marley","c":"80","h":"<blockquote>&ldquo;Better to die fighting for freedom than be a prisoner all the days of your life.&rdquo; &mdash; <footer>Bob Marley</footer></blockquote>"},{"q":"All problems are illusions of the mind.","a":"Eckhart Tolle","c":"39","h":"<blockquote>&ldquo;All problems are illusions of the mind.&rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>"},{"q":"Against the assault of laughter nothing can stand.","a":"Mark Twain","c":"50","h":"<blockquote>&ldquo;Against the assault of laughter nothing can stand.&rdquo; &mdash; <footer>Mark Twain</footer></blockquote>"},{"q":"I would rather die on my feet than live on my knees.","a":"Euripides","c":"52","h":"<blockquote>&ldquo;I would rather die on my feet than live on my knees.&rdquo; &mdash; <footer>Euripides</footer></blockquote>"},{"q":"Change is never easy, but always possible.","a":"Barack Obama","c":"42","h":"<blockquote>&ldquo;Change is never easy, but always possible.&rdquo; &mdash; <footer>Barack Obama</footer></blockquote>"},{"q":"You can't get to a place that you don't believe exists.","a":"Unknown","c":"55","h":"<blockquote>&ldquo;You can't get to a place that you don't believe exists.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"},{"q":"The heart wants what it wants - or else it does not care.","a":"Emily Dickinson","c":"57","h":"<blockquote>&ldquo;The heart wants what it wants - or else it does not care.&rdquo; &mdash; <footer>Emily Dickinson</footer></blockquote>"},{"q":"Be willing to be a beginner every single morning.","a":"Meister Eckhart","c":"49","h":"<blockquote>&ldquo;Be willing to be a beginner every single morning.&rdquo; &mdash; <footer>Meister Eckhart</footer></blockquote>"},{"q":"Life does not get better by chance, it gets better by change.","a":"Jim Rohn","c":"61","h":"<blockquote>&ldquo;Life does not get better by chance, it gets better by change.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>"},{"q":"A diamond is a piece of charcoal that handled stress exceptionally well.","a":"Unknown","c":"72","h":"<blockquote>&ldquo;A diamond is a piece of charcoal that handled stress exceptionally well.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"},{"q":"Decide whether or not the goal is worth the risks involved. If it is, stop worrying.","a":"Amelia Earhart","c":"84","h":"<blockquote>&ldquo;Decide whether or not the goal is worth the risks involved. If it is, stop worrying.&rdquo; &mdash; <footer>Amelia Earhart</footer></blockquote>"},{"q":"Quality means doing it right when no one is looking.","a":"Henry Ford","c":"52","h":"<blockquote>&ldquo;Quality means doing it right when no one is looking.&rdquo; &mdash; <footer>Henry Ford</footer></blockquote>"},{"q":"Think of yourself as dead. you have lived your life. Now, take what's left, and live it properly.","a":"Marcus Aurelius","c":"97","h":"<blockquote>&ldquo;Think of yourself as dead. you have lived your life. Now, take what's left, and live it properly.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>"},{"q":"Get busy living, or get busy dying.","a":"Stephen King","c":"35","h":"<blockquote>&ldquo;Get busy living, or get busy dying.&rdquo; &mdash; <footer>Stephen King</footer></blockquote>"},{"q":"Fear is stupid. So are regrets.","a":"Marilyn Monroe","c":"31","h":"<blockquote>&ldquo;Fear is stupid. So are regrets.&rdquo; &mdash; <footer>Marilyn Monroe</footer></blockquote>"},{"q":"Where ever you are, you are one with the clouds and one with the sun and the stars you see. You are one with everything.","a":"Shunryu Suzuki","c":"120","h":"<blockquote>&ldquo;Where ever you are, you are one with the clouds and one with the sun and the stars you see. You are one with everything.&rdquo; &mdash; <footer>Shunryu Suzuki</footer></blockquote>"},{"q":"A single act of kindness throws out roots in all directions, and the roots spring up and make new trees.","a":"Amelia Earhart","c":"104","h":"<blockquote>&ldquo;A single act of kindness throws out roots in all directions, and the roots spring up and make new trees.&rdquo; &mdash; <footer>Amelia Earhart</footer></blockquote>"},{"q":"We think too much and feel too little.","a":"Charlie Chaplin","c":"38","h":"<blockquote>&ldquo;We think too much and feel too little.&rdquo; &mdash; <footer>Charlie Chaplin</footer></blockquote>"},{"q":"You cannot teach a crab to walk straight.","a":"Aristophanes","c":"41","h":"<blockquote>&ldquo;You cannot teach a crab to walk straight.&rdquo; &mdash; <footer>Aristophanes</footer></blockquote>"},{"q":"The more something threatens your identity, the more you will avoid it.","a":"Mark Manson","c":"71","h":"<blockquote>&ldquo;The more something threatens your identity, the more you will avoid it.&rdquo; &mdash; <footer>Mark Manson</footer></blockquote>"},{"q":"Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough. ","a":"Oprah Winfrey","c":"135","h":"<blockquote>&ldquo;Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough. &rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>"},{"q":"Giving is living. If you stop wanting to give, there's nothing more to live for.","a":"Audrey Hepburn","c":"80","h":"<blockquote>&ldquo;Giving is living. If you stop wanting to give, there's nothing more to live for.&rdquo; &mdash; <footer>Audrey Hepburn</footer></blockquote>"},{"q":"The more reasons you have for achieving your goal, the more determined you will become.","a":"Brian Tracy","c":"87","h":"<blockquote>&ldquo;The more reasons you have for achieving your goal, the more determined you will become.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"},{"q":"Don't let the noise of others opinions drown out your inner voice.","a":"Steve Jobs","c":"66","h":"<blockquote>&ldquo;Don't let the noise of others opinions drown out your inner voice.&rdquo; &mdash; <footer>Steve Jobs</footer></blockquote>"},{"q":"We are shaped and fashioned by what we love.","a":"Johann Wolfgang von Goethe","c":"44","h":"<blockquote>&ldquo;We are shaped and fashioned by what we love.&rdquo; &mdash; <footer>Johann Wolfgang von Goethe</footer></blockquote>"},{"q":"The consequences of today are determined by the actions of the past. To change your future, alter your decisions today.","a":"Unknown","c":"119","h":"<blockquote>&ldquo;The consequences of today are determined by the actions of the past. To change your future, alter your decisions today.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"},{"q":"Yesterday is history, tomorrow is a mystery, today is God's gift, that's why we call it the present.","a":"Joan Rivers","c":"100","h":"<blockquote>&ldquo;Yesterday is history, tomorrow is a mystery, today is God's gift, that's why we call it the present.&rdquo; &mdash; <footer>Joan Rivers</footer></blockquote>"},{"q":"A clever person turns great troubles into little ones, and little ones into none at all. ","a":"Chinese Proverb","c":"89","h":"<blockquote>&ldquo;A clever person turns great troubles into little ones, and little ones into none at all. &rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"},{"q":"Our joy does not have to be based on our circumstances.","a":"Joyce Meyer","c":"55","h":"<blockquote>&ldquo;Our joy does not have to be based on our circumstances.&rdquo; &mdash; <footer>Joyce Meyer</footer></blockquote>"},{"q":"Do you have the patience to wait until your mud settles and the water is clear?","a":"Lao Tzu","c":"79","h":"<blockquote>&ldquo;Do you have the patience to wait until your mud settles and the water is clear?&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>"},{"q":"All has not been said and never will be.","a":"Samuel Beckett","c":"40","h":"<blockquote>&ldquo;All has not been said and never will be.&rdquo; &mdash; <footer>Samuel Beckett</footer></blockquote>"},{"q":"A single dream is more powerful than a thousand realities.","a":"J.R.R. Tolkien","c":"58","h":"<blockquote>&ldquo;A single dream is more powerful than a thousand realities.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>"},{"q":"The art of being wise is knowing what to overlook.","a":"William James","c":"50","h":"<blockquote>&ldquo;The art of being wise is knowing what to overlook.&rdquo; &mdash; <footer>William James</footer></blockquote>"},{"q":"The friendship that can cease has never been real. ","a":"St. Jerome","c":"51","h":"<blockquote>&ldquo;The friendship that can cease has never been real. &rdquo; &mdash; <footer>St. Jerome</footer></blockquote>"},{"q":"Everything that irritates us about others.","a":"Carl Jung","c":"42","h":"<blockquote>&ldquo;Everything that irritates us about others.&rdquo; &mdash; <footer>Carl Jung</footer></blockquote>"},{"q":"If you want to make God laugh, tell him about your plans. ","a":"Woody Allen","c":"58","h":"<blockquote>&ldquo;If you want to make God laugh, tell him about your plans. &rdquo; &mdash; <footer>Woody Allen</footer></blockquote>"},{"q":"If you want others to be happy, practice compassion. If you want to be happy, practice compassion.","a":"Dalai Lama","c":"98","h":"<blockquote>&ldquo;If you want others to be happy, practice compassion. If you want to be happy, practice compassion.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>"},{"q":"My instinct is always to seek out challenges as opposed to avoiding them.","a":"Josh Waitzkin","c":"73","h":"<blockquote>&ldquo;My instinct is always to seek out challenges as opposed to avoiding them.&rdquo; &mdash; <footer>Josh Waitzkin</footer></blockquote>"},{"q":"He who cannot be a good follower cannot be a good leader.","a":"Aristotle","c":"57","h":"<blockquote>&ldquo;He who cannot be a good follower cannot be a good leader.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"},{"q":"If you believe you can, you can. If you believe you can't, then, well you can't.","a":"Celestine Chua","c":"80","h":"<blockquote>&ldquo;If you believe you can, you can. If you believe you can't, then, well you can't.&rdquo; &mdash; <footer>Celestine Chua</footer></blockquote>"},{"q":"If you can't, you must. If you must, you can.","a":"Tony Robbins","c":"45","h":"<blockquote>&ldquo;If you can't, you must. If you must, you can.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"},{"q":"The roots of education are bitter, but the fruit is sweet.","a":"Aristotle","c":"58","h":"<blockquote>&ldquo;The roots of education are bitter, but the fruit is sweet.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"},{"q":"The meaning of life is just to be alive. It is so plain and so obvious and so simple.","a":"Alan Watts","c":"85","h":"<blockquote>&ldquo;The meaning of life is just to be alive. It is so plain and so obvious and so simple.&rdquo; &mdash; <footer>Alan Watts</footer></blockquote>"},{"q":"Don't waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.","a":"Roy T. Bennett","c":"95","h":"<blockquote>&ldquo;Don't waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"},{"q":"If you hang out with chickens, you're going to cluck and if you hang out with eagles, you're going to fly.","a":"Steve Maraboli","c":"106","h":"<blockquote>&ldquo;If you hang out with chickens, you're going to cluck and if you hang out with eagles, you're going to fly.&rdquo; &mdash; <footer>Steve Maraboli</footer></blockquote>"},{"q":"There is no sadder sight than a young pessimist.","a":"Mark Twain","c":"48","h":"<blockquote>&ldquo;There is no sadder sight than a young pessimist.&rdquo; &mdash; <footer>Mark Twain</footer></blockquote>"},{"q":"In a world that is constantly changing, it is to our advantage to learn how to adapt and enjoy something better.","a":"Spencer Johnson","c":"112","h":"<blockquote>&ldquo;In a world that is constantly changing, it is to our advantage to learn how to adapt and enjoy something better.&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>"},{"q":"It is better to disappoint people with the truth than to appease them with a lie.","a":"Simon Sinek","c":"81","h":"<blockquote>&ldquo;It is better to disappoint people with the truth than to appease them with a lie.&rdquo; &mdash; <footer>Simon Sinek</footer></blockquote>"},{"q":"It ain't where you start in life, it's where you end up, and what you did along the way.","a":"Colin Powell","c":"88","h":"<blockquote>&ldquo;It ain't where you start in life, it's where you end up, and what you did along the way.&rdquo; &mdash; <footer>Colin Powell</footer></blockquote>"},{"q":"The best dreams happen when you're awake.","a":"Cherie Gilderbloom","c":"41","h":"<blockquote>&ldquo;The best dreams happen when you're awake.&rdquo; &mdash; <footer>Cherie Gilderbloom</footer></blockquote>"},{"q":"In youth we run into difficulties. In old age difficulties run into us. ","a":"Beverly Sills","c":"72","h":"<blockquote>&ldquo;In youth we run into difficulties. In old age difficulties run into us. &rdquo; &mdash; <footer>Beverly Sills</footer></blockquote>"},{"q":"The greatest miracle is to be alive.","a":"Thich Nhat Hanh","c":"36","h":"<blockquote>&ldquo;The greatest miracle is to be alive.&rdquo; &mdash; <footer>Thich Nhat Hanh</footer></blockquote>"},{"q":"Don't let the past steal your present.","a":"Cherralea Morgen","c":"38","h":"<blockquote>&ldquo;Don't let the past steal your present.&rdquo; &mdash; <footer>Cherralea Morgen</footer></blockquote>"},{"q":"It is better to fail in originality than to succeed in imitation.","a":"Herman Melville","c":"65","h":"<blockquote>&ldquo;It is better to fail in originality than to succeed in imitation.&rdquo; &mdash; <footer>Herman Melville</footer></blockquote>"},{"q":"You get in life what you have the courage to ask for.","a":"Oprah Winfrey","c":"53","h":"<blockquote>&ldquo;You get in life what you have the courage to ask for.&rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>"},{"q":"The greatest step towards a life of simplicity is to learn to let go.","a":"Steve Maraboli","c":"69","h":"<blockquote>&ldquo;The greatest step towards a life of simplicity is to learn to let go.&rdquo; &mdash; <footer>Steve Maraboli</footer></blockquote>"},{"q":"I learned the value of hard work by working hard. ","a":"Margaret Mead","c":"50","h":"<blockquote>&ldquo;I learned the value of hard work by working hard. &rdquo; &mdash; <footer>Margaret Mead</footer></blockquote>"},{"q":"To be of use to the world is the only way to be happy.","a":"Hans Christian Andersen","c":"54","h":"<blockquote>&ldquo;To be of use to the world is the only way to be happy.&rdquo; &mdash; <footer>Hans Christian Andersen</footer></blockquote>"},{"q":"You can't let your failures define you. You have to let your failures teach you.","a":"Barack Obama","c":"80","h":"<blockquote>&ldquo;You can't let your failures define you. You have to let your failures teach you.&rdquo; &mdash; <footer>Barack Obama</footer></blockquote>"},{"q":"Real loss is only possible when you love something more than you love yourself.","a":"Robin Williams","c":"79","h":"<blockquote>&ldquo;Real loss is only possible when you love something more than you love yourself.&rdquo; &mdash; <footer>Robin Williams</footer></blockquote>"},{"q":"If you are far from the enemy, make him believe you are near.","a":"Sun Tzu","c":"61","h":"<blockquote>&ldquo;If you are far from the enemy, make him believe you are near.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>"},{"q":"Nothing ever happened in the past that can prevent you from being present now; and if the past cannot prevent you from being present now, what power does it have?","a":"Eckhart Tolle","c":"162","h":"<blockquote>&ldquo;Nothing ever happened in the past that can prevent you from being present now; and if the past cannot prevent you from being present now, what power does it have?&rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>"},{"q":"If it is not right, do not do it, if it is not true, do not say it.","a":"Marcus Aurelius","c":"67","h":"<blockquote>&ldquo;If it is not right, do not do it, if it is not true, do not say it.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>"},{"q":"What a liberation to realize that 'the voice in my head' is not who I am. Who am I then? The one who sees that.","a":"Eckhart Tolle","c":"111","h":"<blockquote>&ldquo;What a liberation to realize that 'the voice in my head' is not who I am. Who am I then? The one who sees that.&rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>"},{"q":"When we have our body and mind in order, everything else will exist in the right place, in the right way.","a":"Shunryu Suzuki","c":"105","h":"<blockquote>&ldquo;When we have our body and mind in order, everything else will exist in the right place, in the right way.&rdquo; &mdash; <footer>Shunryu Suzuki</footer></blockquote>"},{"q":"When you can't make them see the light, make them feel the heat.","a":"Ronald Reagan","c":"64","h":"<blockquote>&ldquo;When you can't make them see the light, make them feel the heat.&rdquo; &mdash; <footer>Ronald Reagan</footer></blockquote>"},{"q":"Be as fluid as water, do not give your enemies anything solid to attack.","a":"Robert Greene","c":"72","h":"<blockquote>&ldquo;Be as fluid as water, do not give your enemies anything solid to attack.&rdquo; &mdash; <footer>Robert Greene</footer></blockquote>"},{"q":"You can easily judge the character of a man by how he treats those who can do nothing for him.","a":"Johann Wolfgang von Goethe","c":"94","h":"<blockquote>&ldquo;You can easily judge the character of a man by how he treats those who can do nothing for him.&rdquo; &mdash; <footer>Johann Wolfgang von Goethe</footer></blockquote>"},{"q":"People acting together as a group can accomplish things which no individual acting alone could ever hope to bring about.","a":"Franklin D. Roosevelt","c":"120","h":"<blockquote>&ldquo;People acting together as a group can accomplish things which no individual acting alone could ever hope to bring about.&rdquo; &mdash; <footer>Franklin D. Roosevelt</footer></blockquote>"},{"q":"It's better to stand by someone's side than by yourself.","a":"Jack London","c":"56","h":"<blockquote>&ldquo;It's better to stand by someone's side than by yourself.&rdquo; &mdash; <footer>Jack London</footer></blockquote>"},{"q":"Do what is right, not what is easy, nor what is popular.","a":"Roy T. Bennett","c":"56","h":"<blockquote>&ldquo;Do what is right, not what is easy, nor what is popular.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"},{"q":"In youth we run into difficulties. In old age difficulties run into us. ","a":"Beverly Sills","c":"72","h":"<blockquote>&ldquo;In youth we run into difficulties. In old age difficulties run into us. &rdquo; &mdash; <footer>Beverly Sills</footer></blockquote>"},{"q":"Decide what your truth is. Then live it.","a":"Kamal Ravikant","c":"40","h":"<blockquote>&ldquo;Decide what your truth is. Then live it.&rdquo; &mdash; <footer>Kamal Ravikant</footer></blockquote>"},{"q":"Old age is like everything else. To make a success of it, you've got to start young.","a":"Theodore Roosevelt","c":"84","h":"<blockquote>&ldquo;Old age is like everything else. To make a success of it, you've got to start young.&rdquo; &mdash; <footer>Theodore Roosevelt</footer></blockquote>"},{"q":"To injure an opponent is to injure yourself. To control aggression without inflicting injury is the Art of Peace.","a":"Morihei Ueshiba","c":"113","h":"<blockquote>&ldquo;To injure an opponent is to injure yourself. To control aggression without inflicting injury is the Art of Peace.&rdquo; &mdash; <footer>Morihei Ueshiba</footer></blockquote>"},{"q":"Life is about not knowing and then doing something anyway.","a":"Mark Manson","c":"58","h":"<blockquote>&ldquo;Life is about not knowing and then doing something anyway.&rdquo; &mdash; <footer>Mark Manson</footer></blockquote>"},{"q":"The busy man is never wise and the wise man is never busy.","a":"Lin Yutang","c":"58","h":"<blockquote>&ldquo;The busy man is never wise and the wise man is never busy.&rdquo; &mdash; <footer>Lin Yutang</footer></blockquote>"},{"q":"Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.","a":"Dalai Lama","c":"89","h":"<blockquote>&ldquo;Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>"},{"q":"The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.","a":"Eleanor Roosevelt","c":"140","h":"<blockquote>&ldquo;The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"},{"q":"Throughout this life, you can never be certain of living long enough to take another breath.","a":"Huang Po","c":"92","h":"<blockquote>&ldquo;Throughout this life, you can never be certain of living long enough to take another breath.&rdquo; &mdash; <footer>Huang Po</footer></blockquote>"},{"q":"The more you take responsibility for your past and present, the more you are able to create the future you seek.","a":"Celestine Chua","c":"112","h":"<blockquote>&ldquo;The more you take responsibility for your past and present, the more you are able to create the future you seek.&rdquo; &mdash; <footer>Celestine Chua</footer></blockquote>"},{"q":"When you move beyond your fear, you feel free.","a":"Spencer Johnson","c":"46","h":"<blockquote>&ldquo;When you move beyond your fear, you feel free.&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>"},{"q":"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.","a":"Henry Ford","c":"114","h":"<blockquote>&ldquo;When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.&rdquo; &mdash; <footer>Henry Ford</footer></blockquote>"},{"q":"If you are lucky enough to find love, remember it is there and don't throw it away.","a":"Stephen Hawking","c":"83","h":"<blockquote>&ldquo;If you are lucky enough to find love, remember it is there and don't throw it away.&rdquo; &mdash; <footer>Stephen Hawking</footer></blockquote>"},{"q":"To do great work one must be very idle as well as very industrious.","a":"Samuel Butler","c":"67","h":"<blockquote>&ldquo;To do great work one must be very idle as well as very industrious.&rdquo; &mdash; <footer>Samuel Butler</footer></blockquote>"},{"q":"Go confidently in the direction of your dreams. Live the life you've imagined.","a":"Arnold Schwarzenegger","c":"78","h":"<blockquote>&ldquo;Go confidently in the direction of your dreams. Live the life you've imagined.&rdquo; &mdash; <footer>Arnold Schwarzenegger</footer></blockquote>"}]`;

function Quote({size}) {
  const parsedData = JSON.parse(rawData);
  const quotes = parsedData.map((obj) => ({ quote: obj.q, author: obj.a }));
  const blockquotes = parsedData.map((obj) => obj.h )
  const [quote, setQuote] = useState({ quote: "", author: "" });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1.2),
    textAlign: 'center',
    marginTop: "17px",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 15000);

    return () => clearInterval(intervalId);
  }, [quotes]);

  if (size === "large") {
    return (
      <Box>
      <Typography variant="h4" align="center">Inspirational Quotes</Typography>
      <Container >
        {quotes.map((q) => (
          <Item >"{q.quote}"<br/>-{q.author}</Item>
        ))}
      </Container>
      </Box>
    );
  } else if (size === "widget") {
    return (
      <Paper elevation={2} sx={{ p: 2 }}>
        {quote.author === "" ? (
          <Typography variant="body1">Loading . . .</Typography>
        ) : (
          <>
            <Typography variant="body1" align="justify">
              "{quote.quote}"
            </Typography>
            <Typography variant="subtitle1" align="center">
              - {quote.author}
            </Typography>
          </>
        )}
      </Paper>
    );
  }
}

export default Quote;
