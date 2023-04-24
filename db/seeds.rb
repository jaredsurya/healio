# SERVICES

create_table "services", force: :cascade do |t|
  t.string "name"
  t.text "description"
  t.string "image"
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
  t.string "desc"
end

def reiki
  name = "Reiki"
  desc = "Reiki is a Japanese healing technique that involves the transfer of energy through the hands of a practitioner to promote physical, emotional, and spiritual well-being."
  description = "Reiki is a Japanese healing technique that uses the transfer of energy from a practitioner to a recipient to promote physical, emotional, and spiritual healing. The word \"Reiki\" comes from two Japanese words - \"rei\" which means universal, and \"ki\" which means life force energy.

  History of Reiki:
  Reiki was developed in Japan in the early 1900s by Mikao Usui, a Buddhist monk who was seeking a way to promote healing and spiritual development. According to the traditional story, Usui experienced a spiritual awakening after spending 21 days fasting and meditating on Mount Kurama, during which he received the knowledge and ability to practice Reiki.
  
  Usui began practicing Reiki in Japan and taught the technique to others, including Chujiro Hayashi, who went on to develop a system of hand positions that is still used in modern Reiki practice. One of Hayashi's students, Hawayo Takata, brought Reiki to the West in the 1930s, where it gained popularity and spread throughout the world.
  
  Techniques of Reiki:
  Reiki is based on the belief that the human body is surrounded by an energy field or aura that can be influenced by a practitioner's hands. The practitioner uses specific hand positions to channel energy into the recipient's body, promoting healing and balancing the body's energy centers, or chakras.
  
  During a typical Reiki session, the recipient lies down or sits comfortably while the practitioner places their hands on or near the recipient's body in specific positions. The practitioner may also use symbols or other techniques to enhance the flow of energy.
  
  Reiki is often used to treat physical ailments, such as chronic pain, as well as emotional and mental issues, such as stress and anxiety. It is also used to promote overall wellness and spiritual development.
  
  Reiki is a gentle, non-invasive technique that is safe for most people to receive. It is often used in conjunction with other forms of medical or holistic healing to promote overall health and well-being.
  
  In summary, Reiki is a Japanese healing technique that uses the transfer of energy from a practitioner to a recipient to promote physical, emotional, and spiritual healing. It was developed by Mikao Usui in the early 1900s and is based on the belief that the human body is surrounded by an energy field that can be influenced by a practitioner's hands. Reiki is often used to treat physical and emotional ailments and promote overall wellness and spiritual development."
  image = "https://www.naminorthwoods.org/wp-content/uploads/sites/188/2020/09/reiki-treatment_886x576.jpg"

  reiki_hash = {
    name: name,
    desc: desc,
    description: description,
    image: image
  }
  return reiki_hash
end

Service.create(reiki)

def acupuncture
  name = "Acupuncture"
  desc = "Acupuncture is a traditional Chinese healing technique that involves the insertion of thin needles into specific points on the body to stimulate the flow of energy and promote healing. It is often used to treat a variety of physical and emotional issues, such as chronic pain and anxiety."
  description = "Acupuncture is a traditional Chinese healing technique that has been practiced for over 2,000 years. It is based on the belief that the body has a natural flow of energy, or \"Qi,\" that travels along pathways called meridians. According to traditional Chinese medicine, illness and pain are caused by imbalances or blockages in the flow of Qi.

  History of Acupuncture:
  The origins of acupuncture can be traced back to ancient China, where it was developed as part of traditional Chinese medicine. The earliest written records of acupuncture date back to the Han Dynasty (206 BCE-220 CE), but the practice likely predates this period.
  
  Acupuncture spread throughout China and eventually to other parts of Asia, where it became a popular healing technique. It was introduced to the West in the 1970s, where it gained popularity as an alternative or complementary therapy.
  
  Techniques of Acupuncture:
  Acupuncture involves the insertion of thin, sterile needles into specific points on the body to stimulate the flow of Qi and promote healing. The needles are left in place for a period of time, usually between 20-30 minutes.
  
  The acupuncturist selects specific points on the body based on the individual's symptoms and diagnosis. There are over 360 acupuncture points on the body, each with a specific function and therapeutic effect.
  
  In addition to needle insertion, acupuncture may also involve other techniques, such as moxibustion (the burning of a medicinal herb near the skin), cupping (the use of suction cups on the skin), and electrical stimulation (the use of low-level electrical currents on the needles).
  
  Acupuncture is often used to treat a variety of physical and emotional issues, such as chronic pain, headaches, anxiety, and digestive problems. It is also used to promote overall wellness and balance in the body.
  
  Acupuncture is generally considered safe when performed by a trained and licensed practitioner using sterile needles. It is often used in conjunction with other forms of medical treatment to promote healing and improve overall health and well-being.
  
  In summary, acupuncture is a traditional Chinese healing technique that involves the insertion of thin needles into specific points on the body to stimulate the flow of energy and promote healing. It has been practiced for over 2,000 years and is based on the belief that the body has a natural flow of energy that can be influenced by acupuncture. Acupuncture is often used to treat physical and emotional issues and promote overall wellness and balance in the body."
  image = "https://imageio.forbes.com/specials-images/imageserve/62963ee8c94bab429f666003/WTHN-acupuncture-/960x0.jpg?format=jpg&width=960"

  acu_hash = {
    name: name,
    desc: desc,
    description: description,
    image: image
  }
  return acu_hash
end
Service.create(acupuncture)

def hypnotherapy
  name = "Hypnotherapy"
  desc = "Hypnotherapy is a form of therapy that uses hypnosis to create a state of deep relaxation and heightened suggestibility in order to access the subconscious mind and facilitate positive change."
  description = "Hypnotherapy is a form of therapy that uses hypnosis to create a state of deep relaxation and heightened suggestibility in order to access the subconscious mind and facilitate positive change. The hypnotherapist guides the client into a trance-like state, where the conscious mind is relaxed and the subconscious mind is more open and receptive to suggestion.

  History of Hypnotherapy:
  The use of hypnosis for therapeutic purposes can be traced back to ancient cultures, such as Egypt and Greece. However, the modern practice of hypnotherapy emerged in the late 19th century with the work of Austrian physician Franz Anton Mesmer, who believed that hypnosis could be used to treat a variety of physical and psychological ailments.
  
  Techniques of Hypnotherapy:
  Hypnotherapy can be used to address a wide range of issues, including anxiety, depression, addiction, chronic pain, and trauma. The hypnotherapist works with the client to identify the root cause of the problem and develop a treatment plan.
  
  During a hypnotherapy session, the client is guided into a state of deep relaxation and trance-like state. While in this state, the hypnotherapist provides suggestions and guidance to the subconscious mind, such as positive affirmations and visualizations, to facilitate healing and change.
  
  The hypnotherapist may also use regression techniques to help the client explore past experiences or memories that may be contributing to their current issues. By accessing these memories in a safe and controlled environment, the client can gain insight and perspective on their experiences and work towards healing and resolution.
  
  Benefits of Hypnotherapy:
  Hypnotherapy has been shown to be an effective treatment for a variety of issues, including anxiety, depression, addiction, and chronic pain. It can also be used to improve self-esteem and confidence, enhance creativity and performance, and promote spiritual growth and development.
  
  Hypnotherapy is generally considered safe when practiced by a trained and licensed practitioner. It is often used in conjunction with other forms of therapy or medical treatment to provide a holistic approach to healing and wellness.
  
  In summary, hypnotherapy is a form of therapy that uses hypnosis to create a state of deep relaxation and heightened suggestibility in order to access the subconscious mind and facilitate positive change. It has a long history and is used to treat a variety of physical and emotional issues, promote spiritual growth and development, and enhance overall well-being. Hypnotherapy is generally considered safe when practiced by a trained and licensed practitioner and is often used in conjunction with other forms of therapy or medical treatment."
  image = "https://www.apsyche.co.uk/images/dsc_5090-819x1024.jpg"

  hash = {
    name: name,
    desc: desc,
    description: description,
    image: image
  }
  return hash
end
Service.create(hypnotherapy)

def crystalhealing
  name = "Crystal Healing"
  desc = "Crystal healing is a holistic healing technique that involves the use of crystals and gemstones to balance and promote healing energy within the body."
  description = "Crystal healing is a form of alternative therapy that involves using crystals and gemstones to promote physical, emotional, and spiritual healing. The theory behind crystal healing is that each crystal or gemstone has its own unique energy vibration, and by placing them on or around the body, they can help to balance and harmonize the body's energy system, known as the chakras.

  Crystal healers believe that crystals and gemstones can be used to help alleviate a wide range of physical and emotional symptoms, including anxiety, depression, pain, inflammation, and digestive issues. They also believe that certain crystals can help to promote positive emotional states, such as love, confidence, and inner peace.
  
  During a crystal healing session, the client typically lies down and the crystal healer places various crystals on or around the body, often on or near the chakras. The crystals may also be arranged in specific patterns or grids. The healer may also use their hands to channel energy and facilitate the healing process.
  
  Crystal healing is often used in conjunction with other forms of alternative and traditional medicine, and it is considered to be a complementary therapy rather than a replacement for conventional medical treatment.
  
  Although there is limited scientific evidence to support the effectiveness of crystal healing, many people report positive results from this therapy. Some people find that crystal healing helps them to feel more relaxed, centered, and balanced, while others report a reduction in physical and emotional symptoms.
  
  In summary, crystal healing is a form of alternative therapy that involves using crystals and gemstones to promote physical, emotional, and spiritual healing. It is based on the theory that each crystal has its own unique energy vibration, and by placing them on or around the body, they can help to balance and harmonize the body's energy system. While scientific evidence is limited, many people find that crystal healing can be an effective complement to other forms of medical treatment."
  image = "https://stylecaster.com/wp-content/uploads/2016/05/crystal-healing-feat2.jpg"

  crystal_hash = {
    name: name,
    desc: desc,
    description: description,
    image: image
  }
  return crystal_hash
end
Service.create(crystalhealing)

def acupressure
  name = "Acupressure"
  desc = "Acupressure is a healing technique that involves applying pressure to specific points on the body to relieve pain and promote relaxation."
  description = "Acupressure is a healing technique that involves applying pressure to specific points on the body to relieve pain and promote relaxation. It is based on the principles of Traditional Chinese Medicine, which views the body as a complex network of energy pathways called meridians, through which vital energy, or \"Qi,\" flows.

  History of Acupressure:
  Acupressure has a long history dating back thousands of years and is believed to have originated in China. It is part of Traditional Chinese Medicine and is closely related to acupuncture, which uses needles to stimulate the same points on the body.
  
  Techniques of Acupressure:
  During an acupressure session, the practitioner uses their fingers, hands, elbows, or other tools to apply pressure to specific points on the body, known as acupoints. The pressure can be applied using different techniques, such as tapping, kneading, or rubbing.
  
  Each acupoint is believed to correspond to a specific organ or system in the body and has a unique effect on the flow of Qi. By applying pressure to these points, the practitioner can stimulate the body's natural healing mechanisms and restore balance and harmony.
  
  Benefits of Acupressure:
  Acupressure is commonly used to treat a variety of physical and emotional issues, such as headaches, back pain, anxiety, and depression. It can also be used to improve circulation, boost the immune system, and promote overall health and well-being.
  
  Acupressure is generally considered safe when practiced by a trained and licensed practitioner. It is often used in conjunction with other forms of therapy or medical treatment to provide a holistic approach to healing and wellness.
  
  In summary, acupressure is a healing technique that involves applying pressure to specific points on the body to relieve pain and promote relaxation. It is based on the principles of Traditional Chinese Medicine and has a long history of use in treating a variety of physical and emotional issues. Acupressure is generally considered safe when practiced by a trained and licensed practitioner and is often used in conjunction with other forms of therapy or medical treatment."
  image = "https://images.healthshots.com/healthshots/en/uploads/2022/06/23224427/acupressure.jpg"

  hash = {
    name: name,
    desc: desc,
    description: description,
    image: image
  }
  return hash
end
Service.create(acupressure)

def lighttherapy
  name = "Light Therapy"
  desc = "Light therapy, also known as phototherapy, is a treatment that uses specific wavelengths of light to treat a variety of physical and mental health conditions. It is often used to treat seasonal affective disorder, depression, sleep disorders, skin conditions, and other issues."
  description = "Light therapy, also known as phototherapy, is a form of treatment that uses specific wavelengths of light to treat a variety of physical and mental health conditions. It is based on the understanding that exposure to certain types of light can have a positive impact on the body and mind.

  History of Light Therapy:
  The use of light therapy dates back to ancient civilizations, who recognized the importance of sunlight in maintaining health and well-being. In modern times, light therapy has been used since the early 20th century to treat skin conditions such as psoriasis and eczema, and has since been expanded to treat a range of other conditions.
  
  Techniques of Light Therapy:
  There are several techniques used in light therapy, including bright light therapy, low-level light therapy, and blue light therapy. Bright light therapy involves exposure to a bright light source for a specified period of time, typically in the morning, to treat seasonal affective disorder, depression, and sleep disorders. Low-level light therapy involves the use of a device that emits low-level light to treat skin conditions, wounds, and pain. Blue light therapy uses a specific wavelength of light to treat skin conditions such as acne and psoriasis.
  
  Benefits of Light Therapy:
  Light therapy has been found to be effective in treating a wide range of physical and mental health conditions, including seasonal affective disorder, depression, sleep disorders, skin conditions, and pain. It works by regulating the body's natural rhythms, including the sleep-wake cycle, and by promoting the production of certain chemicals in the brain that are associated with improved mood and relaxation.
  
  Light therapy is generally considered safe, but as with any medical treatment, there are some risks and potential side effects. These can include eye strain, headaches, and skin irritation.
  
  In summary, light therapy is a form of treatment that uses specific wavelengths of light to treat a variety of physical and mental health conditions. It has a long history of use, and several techniques are used to deliver light therapy, including bright light therapy, low-level light therapy, and blue light therapy. Light therapy has been found to be effective in treating a wide range of conditions and is generally considered safe, though there are some risks and potential side effects."
  image = "https://www.science-sparks.com/wp-content/uploads/2019/06/shutterstock_1194072568-scaled.jpg"

  hash = {
    name: name,
    desc: desc,
    description: description,
    image: image
  }
  return hash
end
Service.create(lighttherapy)

def dancetherapy
  name = "Dance Therapy"
  desc = "Dance therapy is a type of therapy that integrates movement, dance, and psychotherapy to support individuals in improving their emotional, physical, and mental well-being. It can be used to address a range of conditions, including anxiety, depression, trauma, and addiction."
  description = "Dance therapy is a form of therapy that uses the expressive, creative, and therapeutic aspects of movement and dance to improve individuals' emotional, physical, and mental health. It is a type of psychotherapy that combines the somatic and psychological dimensions of human experience.

  Dance therapists are trained professionals who use movement and dance to help individuals explore and express their emotions, thoughts, and behaviors. They work with clients to identify and address the underlying emotional and physical issues that contribute to their mental health problems. Dance therapy can be performed individually or in groups, depending on the needs of the client.
  
  During a typical dance therapy session, clients are guided through a series of movements and exercises that are designed to promote self-awareness, emotional regulation, and healing. These exercises may involve improvisation, mirroring, rhythmic movement, and storytelling. Clients are encouraged to explore their thoughts, feelings, and memories through movement and dance, and to express themselves in ways that may be difficult to articulate verbally.
  
  Dance therapy is a flexible and adaptable form of therapy that can be tailored to the unique needs and abilities of each client. It is used to treat a range of mental health conditions, including anxiety, depression, trauma, eating disorders, addiction, and personality disorders. Dance therapy has also been used to support individuals with physical disabilities, chronic pain, and neurological disorders such as Parkinson's disease.
  
  Research has shown that dance therapy can be an effective treatment for a variety of mental health conditions. It has been found to improve self-esteem, reduce anxiety and depression, promote relaxation, and improve interpersonal relationships. Dance therapy can also improve physical health by increasing flexibility, balance, and coordination.
  
  In summary, dance therapy is a powerful form of therapy that combines movement and dance with psychotherapy to support individuals in improving their emotional, physical, and mental well-being. It is a flexible and adaptable form of therapy that can be tailored to the unique needs and abilities of each client. Through movement and dance, clients can gain insight into their emotions, develop coping skills, and improve their self-awareness and self-esteem."
#   image = "https://hips.hearstapps.com/hmg-prod/images/female-dancer-in-motion-royalty-free-image-1575472481.jpg"
hash = {
  name: name,
  desc: desc,
  description: description,
  image: image
}
return hash
end
Service.create(dancetherapy)


def aromatherapy
  name = "Aromatherapy"
  description = "Aromatherapy is a holistic therapy that uses essential oils extracted from plants to promote physical and emotional healing. The practice has been used for thousands of years and is believed to have originated in ancient Egypt and China. Essential oils are highly concentrated plant extracts that are known to have therapeutic properties.

  Aromatherapy works by inhaling the essential oils or applying them topically to the skin. The oils can be used in a variety of ways, including in diffusers, as massage oils, or as part of a bath or shower.
  
  Essential oils are believed to have a variety of health benefits, including reducing anxiety and stress, promoting relaxation and sleep, boosting the immune system, reducing pain and inflammation, improving digestion, and more. Each essential oil has its unique properties and benefits, and they can be used alone or in combination with other oils.
  
  Aromatherapy is often used in conjunction with massage therapy, meditation, and other holistic therapies to enhance their therapeutic effects. The practice is also used in clinical settings, such as hospitals and hospices, to help manage symptoms and promote healing.
  
  To use aromatherapy at home, you can add a few drops of essential oil to a diffuser, or dilute them in a carrier oil and use them as a massage oil or in a bath. Some common essential oils used in aromatherapy include lavender, peppermint, eucalyptus, chamomile, tea tree, and lemon.
  
  While aromatherapy is generally considered safe, it's important to note that essential oils are highly concentrated and can be toxic if used incorrectly. It's essential to use high-quality oils, dilute them properly, and follow the recommended guidelines for safe use.
  
  Aromatherapy is similar to other holistic therapies, such as herbal medicine and acupuncture, in that it seeks to promote healing and balance within the body. However, aromatherapy is unique in that it specifically uses essential oils to promote healing and wellbeing.
  
  Overall, aromatherapy is a safe and effective way to promote physical and emotional healing. It's a popular alternative therapy that has gained widespread acceptance in recent years, and many people have reported significant improvements in their health and wellbeing through regular practice."

  image = "https://www.hackensackmeridianhealth.org/-/media/project/hmh/hmh/public/healthu/aromatherapy.jpg?h=1414&iar=0&w=1885&hash=FA1EE419D71D719F6BC313944630D0B2"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(aromatherapy)

def eft
  name = "EFT Tapping"
  description = "Emotional Freedom Techniques (EFT) Tapping is a form of alternative therapy that combines elements of cognitive therapy and acupressure to address emotional and physical issues. It involves tapping on specific points on the body with the fingertips while focusing on negative emotions, thoughts, or memories.

  EFT Tapping is based on the principles of Traditional Chinese Medicine, which involves the flow of energy or 'chi' through the body's meridians. The practice of EFT Tapping is designed to help balance the body's energy by stimulating specific points along these meridians. The practice is often referred to as 'psychological acupressure.'
  
  EFT Tapping is believed to help with a variety of emotional and physical issues, including anxiety, depression, phobias, PTSD, chronic pain, and more. Some practitioners believe that tapping can help release negative emotions and beliefs, reduce stress, and promote a sense of calm and wellbeing.
  
  To perform EFT Tapping, the individual begins by identifying the issue they wish to address. They then rate the intensity of the emotion on a scale of 0-10. The individual then begins tapping on specific points on the body, typically starting with the karate chop point on the side of the hand, while repeating a phrase that acknowledges the problem or negative emotion.
  
  The specific points tapped in EFT Tapping include the eyebrow, side of the eye, under the eye, under the nose, chin, collarbone, under the arm, and top of the head. Each point is tapped 5-7 times while repeating a statement related to the negative emotion or belief being addressed.
  
  As the individual continues to tap, they may notice a decrease in the intensity of the emotion. They can then re-rate the intensity on the 0-10 scale and repeat the process until the intensity is reduced to a manageable level.
  
  EFT Tapping is similar to other therapeutic remedies such as acupuncture, acupressure, and cognitive therapy. Acupuncture and acupressure also involve stimulating specific points on the body to promote healing and balance, while cognitive therapy involves identifying and changing negative thoughts and beliefs.
  
  However, EFT Tapping differs from these other therapies in several ways. For one, it does not involve the use of needles, making it a less invasive and less painful alternative to acupuncture. Additionally, it combines the physical act of tapping with cognitive therapy techniques, making it a more holistic approach to healing.
  
  Overall, EFT Tapping is a unique and effective form of alternative therapy that has gained popularity in recent years. While more research is needed to fully understand its benefits, many people have reported significant improvements in their emotional and physical wellbeing through regular practice."
  image = "https://api.army.mil/e2/c/-images/2010/09/27/86783/army.mil-86783-2010-09-27-170927.jpg"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(eft)

def laughteryoga
  name = "Laughter Yoga"
  description = "Laughter yoga is a form of exercise that combines yoga breathing techniques with intentional laughter. The practice was developed by Dr. Madan Kataria in Mumbai, India, in 1995 and has since gained popularity worldwide as a form of alternative therapy.

  The practice of laughter yoga involves a series of exercises that encourage participants to laugh for no reason. Participants are encouraged to fake laugh initially, which often leads to genuine laughter. The laughter is usually done in a group setting and often involves eye contact and physical touch.
  
  Laughter yoga is based on the principle that the body cannot differentiate between real and fake laughter and that both types of laughter have similar physical and emotional benefits. Laughter is known to stimulate the release of endorphins, which are natural mood-boosters, and can reduce stress and anxiety.
  
  The breathing techniques used in laughter yoga are similar to those used in traditional yoga practices. Participants are taught to take deep breaths and to use their diaphragm to control their breathing. The breathing exercises are designed to help participants relax and to increase the flow of oxygen to the body and brain.
  
  Laughter yoga is believed to have many physical and emotional benefits, including reducing stress, boosting the immune system, improving circulation, reducing pain, and promoting a sense of wellbeing. The practice is often used in clinical settings to help manage symptoms of anxiety and depression.
  
  Laughter yoga is similar to other therapeutic remedies in that it seeks to promote physical and emotional healing. It is often used in conjunction with other holistic therapies, such as meditation and mindfulness, to enhance their therapeutic effects.
  
  Overall, laughter yoga is a unique and effective form of alternative therapy that has gained popularity in recent years. While more research is needed to fully understand its benefits, many people have reported significant improvements in their physical and emotional wellbeing through regular practice."
  image = "https://post.healthline.com/wp-content/uploads/2021/01/Laughing_Yoga_1200x628-facebook.jpg"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(laughteryoga)

def ayurveda
  name = "Ayurveda"
  description = "Ayurveda is a traditional system of medicine that originated in India over 5,000 years ago. The word 'Ayurveda' comes from the Sanskrit language and translates to 'the science of life.' The practice is based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit.

  Ayurveda seeks to promote health and wellness through the use of natural remedies and lifestyle practices. The system is based on the principles of the five elements - ether, air, fire, water, and earth - and the three doshas - Vata, Pitta, and Kapha. The doshas are the biological energies that are believed to govern the physical and mental processes in the body.
  
  Ayurvedic treatments may include dietary changes, herbal remedies, massage, meditation, and yoga. The system places a strong emphasis on individualized treatment, and each person is assessed according to their unique constitution, or 'prakriti.' Treatments are then tailored to each individual's specific needs and imbalances.
  
  Ayurveda is believed to have many physical and emotional benefits, including improving digestion, boosting the immune system, reducing stress, and promoting a sense of wellbeing. The practice is often used in conjunction with other holistic therapies, such as acupuncture and herbal medicine, to enhance their therapeutic effects.
  
  Ayurveda is similar to other traditional systems of medicine, such as Traditional Chinese Medicine and Naturopathy, in that it seeks to promote health and wellness through natural remedies and lifestyle practices. However, Ayurveda is unique in its emphasis on individualized treatment and its use of the doshas to assess and address imbalances in the body.
  
  Overall, Ayurveda is a holistic system of medicine that has gained popularity in recent years as a form of alternative therapy. While more research is needed to fully understand its benefits, many people have reported significant improvements in their physical and emotional wellbeing through regular practice."
  image = "https://www.dailypioneer.com/uploads/2022/story/images/big/the-ayurveda-circle-2022-12-10.jpg"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(ayurveda)

def kinesiology
  name = "Kinesiology"
  description = "Kinesiology is a holistic therapy that uses muscle testing to identify imbalances in the body's energy systems. The technique is based on the principles of Traditional Chinese Medicine and seeks to promote physical, emotional, and mental wellbeing through the use of natural remedies and lifestyle changes.

  Kinesiology works on the premise that every muscle in the body is connected to a specific organ or energy meridian. By applying pressure to certain muscles and observing the body's response, practitioners can identify areas of weakness or imbalance in the body's energy system.
  
  Kinesiology can be used to identify imbalances in a wide range of areas, including the digestive system, immune system, and hormonal system. Once imbalances have been identified, practitioners may use a variety of techniques to restore balance to the body, including acupressure, nutritional counseling, and lifestyle changes.
  
  Kinesiology is often used in conjunction with other holistic therapies, such as acupuncture and herbal medicine, to enhance their therapeutic effects. It is also commonly used as a form of complementary therapy to support conventional medical treatments.
  
  Kinesiology is similar to other holistic therapies, such as Traditional Chinese Medicine and Ayurveda, in that it seeks to promote health and wellbeing through natural remedies and lifestyle changes. However, kinesiology is unique in its use of muscle testing to identify imbalances in the body's energy systems.
  
  Overall, kinesiology is a non-invasive and holistic form of therapy that has gained popularity in recent years as a form of alternative medicine. While more research is needed to fully understand its benefits, many people have reported significant improvements in their physical, emotional, and mental wellbeing through regular practice."
  image = "https://onewellness.ca/wp-content/uploads/2019/10/Kins-min.jpg"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(kinesiology)

def taichi
  name = "Tai Chi"
  description = "Tai chi is a Chinese martial art that is often practiced for its health benefits. The practice is characterized by slow, flowing movements that are designed to promote relaxation, balance, and flexibility.

  Tai chi is based on the principles of Traditional Chinese Medicine and is believed to promote health and wellbeing by improving the flow of Qi, or life force energy, through the body. The practice is often described as 'moving meditation' because it requires focused attention and deep breathing, which can help to reduce stress and promote a sense of calm.
  
  In addition to its physical benefits, tai chi is also believed to have many emotional and mental benefits. Regular practice has been shown to improve mood, reduce anxiety and depression, and increase overall feelings of wellbeing.
  
  Tai chi is often used in conjunction with other holistic therapies, such as acupuncture and herbal medicine, to enhance their therapeutic effects. It is also commonly used as a form of complementary therapy to support conventional medical treatments.
  
  Tai chi is similar to other holistic therapies, such as yoga and qigong, in that it seeks to promote health and wellbeing through gentle, flowing movements and deep breathing. However, tai chi is unique in its focus on martial arts movements and its emphasis on balance and relaxation.
  
  Overall, tai chi is a low-impact and holistic form of exercise that has gained popularity in recent years as a form of alternative therapy. While more research is needed to fully understand its benefits, many people have reported significant improvements in their physical, emotional, and mental wellbeing through regular practice."
  image = "https://images.everydayhealth.com/images/tai-chi-guide-1440x810.jpg?sfvrsn=202c824_1"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(taichi)

def iridology
  name = "Iridology"
  description = "Iridology is a complementary therapy that involves analyzing the iris, or colored part of the eye, to identify patterns and markings that are thought to reflect the overall health and wellbeing of the individual.

  The practice of iridology is based on the idea that different parts of the body are connected to specific areas of the iris, and that markings or discolorations in those areas can indicate areas of weakness or imbalance in the corresponding body system. Practitioners use specialized equipment, such as a magnifying glass or a camera with a high-resolution lens, to examine the iris in detail and identify any patterns or markings that may be present.
  
  Iridology is often used in conjunction with other holistic therapies, such as herbal medicine and nutritional counseling, to support overall health and wellbeing. It is also commonly used as a form of complementary therapy to support conventional medical treatments.
  
  Iridology is similar to other holistic therapies, such as acupuncture and reflexology, in that it seeks to promote health and wellbeing through a holistic understanding of the body. However, iridology is unique in its focus on the iris and its belief that markings and patterns in the iris can provide valuable insights into the health of the individual.
  
  Critics of iridology argue that there is no scientific evidence to support the idea that markings or patterns in the iris are directly related to the health of the body. However, proponents of the practice argue that it can be a useful tool for identifying areas of weakness or imbalance in the body and can be used in conjunction with other holistic therapies to support overall health and wellbeing.
  
  Overall, iridology is a non-invasive and holistic form of therapy that has gained popularity in recent years as a form of alternative medicine. While more research is needed to fully understand its benefits, many people have reported significant improvements in their physical, emotional, and mental wellbeing through the use of iridology and other holistic therapies."
  image = "https://cdn.shopify.com/s/files/1/0439/3733/3413/products/serviceiridology_1200x1200.jpg?v=1604556830"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(iridology)

def biofeedback
  name = "Biofeedback"
  description = "Biofeedback is a type of therapy that involves using electronic instruments to monitor and provide feedback about bodily processes such as heart rate, muscle tension, and skin temperature. The goal of biofeedback is to help individuals learn to control these processes in order to improve their health and wellbeing.

  The technique of biofeedback typically involves a session with a trained therapist, who attaches sensors to the individual's body in order to monitor the bodily processes of interest. The therapist then uses a computer or other electronic device to display the readings from the sensors in real time, allowing the individual to see and hear the changes in their bodily processes as they occur.
  
  During a biofeedback session, the therapist may provide guidance and feedback to the individual on how to adjust their breathing, posture, or other factors in order to achieve the desired changes in their bodily processes. Over time, individuals can learn to recognize and control these processes without the use of sensors or electronic devices.
  
  Biofeedback is often used as a complementary therapy to support conventional medical treatments for a variety of conditions, including chronic pain, headaches, anxiety, and high blood pressure. It is also commonly used as a form of stress management and relaxation therapy.
  
  Biofeedback is similar to other holistic therapies, such as mindfulness meditation and hypnotherapy, in that it seeks to promote health and wellbeing through increased awareness and control of bodily processes. However, biofeedback is unique in its use of electronic devices to provide real-time feedback on bodily processes, which can help individuals to more quickly and effectively learn to control these processes.
  
  Overall, biofeedback is a safe and non-invasive form of therapy that has gained popularity in recent years as a form of alternative medicine. While more research is needed to fully understand its benefits, many people have reported significant improvements in their physical, emotional, and mental wellbeing through the use of biofeedback and other holistic therapies."
  image = "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2128880.jpg"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(biofeedback)

def reflexology
  name = "Reflexology"
  description = "Reflexology is a complementary therapy that involves applying pressure to specific points on the feet, hands, or ears, which are believed to correspond to different parts of the body. The goal of reflexology is to promote relaxation, reduce stress, and improve overall health and wellbeing.

  The technique of reflexology typically involves a session with a trained therapist, who applies pressure to specific points on the feet, hands, or ears using their fingers, thumbs, or a small tool. The therapist may use different techniques, such as rubbing, kneading, or tapping, in order to stimulate the reflex points and promote relaxation.
  
  During a reflexology session, the therapist may also use other techniques, such as massage or aromatherapy, to enhance the therapeutic benefits of the treatment. Many people find reflexology to be a relaxing and enjoyable form of therapy that can help to alleviate stress and promote overall wellbeing.
  
  Reflexology is similar to other holistic therapies, such as acupuncture and acupressure, in that it seeks to promote health and wellbeing through the stimulation of specific points on the body. However, reflexology is unique in its focus on the feet, hands, and ears, which are believed to contain reflex points that correspond to different parts of the body.
  
  Critics of reflexology argue that there is no scientific evidence to support the idea that the reflex points on the feet, hands, and ears are directly related to the health of the body. However, proponents of the practice argue that it can be a useful tool for promoting relaxation, reducing stress, and improving overall health and wellbeing.
  
  Overall, reflexology is a non-invasive and holistic form of therapy that has gained popularity in recent years as a form of alternative medicine. While more research is needed to fully understand its benefits, many people have reported significant improvements in their physical, emotional, and mental wellbeing through the use of reflexology and other holistic therapies."
  image = "https://static1.squarespace.com/static/5775209ab8a79b041a327a8e/57f3053ae6f2e1064a491c58/57f305b7be65946007ea95fa/1666009920382/reflexology.jpg?format=1500w"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(reflexology)

def soundhealing
  name = "Sound Healing"
  description = "Sound healing is a complementary therapy that uses sound waves and vibrations to promote physical, emotional, and spiritual healing. The technique of sound healing typically involves the use of different instruments, such as singing bowls, gongs, chimes, drums, and tuning forks, to create a variety of sounds and vibrations that are believed to have therapeutic benefits.

  During a sound healing session, the individual may be asked to lie down or sit in a comfortable position while the therapist or practitioner plays different instruments around them. The sounds and vibrations produced by the instruments are believed to have a calming and balancing effect on the body and mind, helping to alleviate stress, reduce anxiety, and promote relaxation.
  
  Sound healing is similar to other holistic therapies, such as meditation, mindfulness, and yoga, in that it seeks to promote health and wellbeing through increased awareness and connection with the body and mind. However, sound healing is unique in its use of sound waves and vibrations to achieve these benefits.
  
  Proponents of sound healing argue that it can be a useful tool for promoting physical healing, reducing pain and inflammation, and improving immune function. They also suggest that it can help to balance the body's energy and promote a sense of inner peace and harmony.
  
  While there is limited scientific research on the therapeutic benefits of sound healing, many people have reported significant improvements in their physical, emotional, and mental wellbeing through the use of this and other holistic therapies. Some studies have shown that sound healing may help to reduce stress, anxiety, and depression, as well as improve sleep quality and enhance overall feelings of wellbeing.
  
  Overall, sound healing is a non-invasive and holistic form of therapy that has gained popularity in recent years as a form of alternative medicine. While more research is needed to fully understand its benefits, many people have found it to be a useful tool for promoting relaxation, reducing stress, and improving overall health and wellbeing."
  image = "https://www.shape.com/thmb/tqWOaQqs4nHEZPuUTGFCbPu_hVc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tibetan-singing-bowl-f4febbaa66fe44efbdb12edd31da1108.jpg"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(soundhealing)

def psychedelictherapy
  name = "Psychedelic Therapy"
  description = "Psychedelic therapy is a relatively new and evolving form of therapy that uses psychedelic substances, such as psilocybin, LSD, and MDMA, to facilitate healing and personal growth. The technique involves taking the psychedelic substance in a controlled and supervised setting, while a trained therapist or guide provides support and guidance throughout the experience.

  Psychedelic therapy is similar to other forms of psychotherapy in that it seeks to help individuals work through psychological and emotional challenges. However, psychedelic therapy is unique in its use of the psychedelic experience as a means of facilitating self-exploration and personal growth.
  
  During a psychedelic therapy session, the individual is typically asked to lie down or sit in a comfortable position, while the therapist provides guidance and support. The individual then experiences a range of effects, including altered perceptions of reality, changes in mood and emotions, and an enhanced sense of connection with themselves and the world around them.
  
  The therapist may use a variety of techniques during the psychedelic experience, such as guided imagery, music, and mindfulness practices, to help the individual work through any emotional or psychological challenges they may be experiencing. The goal of psychedelic therapy is to facilitate a deep and transformative experience that can help individuals gain new insights into themselves and their lives, and to promote positive personal growth and healing.
  
  Research into psychedelic therapy is still in its early stages, but some studies have shown promising results for treating a range of mental health issues, including depression, anxiety, addiction, and PTSD. Some individuals have reported significant improvements in their mental health and wellbeing after undergoing psychedelic therapy.
  
  While psychedelic therapy can be a powerful and transformative experience, it is important to note that it is not without risks. Psychedelic substances can have unpredictable effects on the mind and body, and may cause adverse reactions in some individuals. It is important that individuals only undergo psychedelic therapy under the guidance and supervision of trained professionals.
  
  Overall, psychedelic therapy is a promising new form of therapy that has the potential to help individuals work through a range of psychological and emotional challenges. While more research is needed to fully understand its benefits and risks, many individuals have found psychedelic therapy to be a transformative and healing experience."
  image = "https://www.hopkinsmedicine.org/psychiatry/research/BPRU/images/Newsroom%202%20Marisol%20Feb%2015%20Fractal%20background%20with%20human%20Modified%20GettyImages-1292520993_3_pyramid.jpg"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(psychedelictherapy)

def moxibustion
  name = "Moxibustion"
  description = "Moxibustion is a traditional Chinese medicine therapy that involves burning dried mugwort, a type of herb, close to the skin at specific acupuncture points on the body. This therapy is believed to stimulate circulation and promote healing.

  Moxibustion is often used in conjunction with acupuncture, which involves the insertion of thin needles at specific points on the body to promote healing and balance. Both therapies are based on the principles of traditional Chinese medicine, which emphasizes the importance of balancing the body's vital energy, or qi.
  
  During a moxibustion session, the practitioner places small cones or balls of compressed mugwort on the skin at specific acupuncture points. These cones or balls are then lit, and the heat generated by the burning mugwort is believed to stimulate circulation and promote healing.
  
  Moxibustion is commonly used to treat a variety of health conditions, including chronic pain, arthritis, digestive issues, menstrual cramps, and respiratory problems. It is also used to promote general health and wellness.
  
  While there is limited scientific research on the effectiveness of moxibustion, some studies have suggested that it may be beneficial for certain health conditions. For example, a 2013 review of research on moxibustion for cancer-related fatigue found that the therapy may be effective in reducing fatigue in cancer patients.
  
  Moxibustion is generally considered safe when performed by a trained practitioner. However, it may not be suitable for everyone, particularly those with sensitive skin or certain medical conditions. It is important to discuss any health concerns with a healthcare provider before trying moxibustion or any other complementary or alternative therapies.
  
  Overall, moxibustion is a traditional Chinese medicine therapy that is believed to promote healing and balance by stimulating circulation and balancing the body's vital energy. While more research is needed to fully understand its benefits and risks, many individuals have found moxibustion to be a beneficial complement to other forms of healthcare."
  image = "https://www.snaptcm.org/wp-content/uploads/2018/12/20171228115002_63769.jpg"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(moxibustion)

def nutritionaltherapy
  name = "Nutritional Therapy"
  description = "Nutritional therapy is a holistic approach to healthcare that uses food and nutritional supplements to promote healing and prevent disease. It is based on the idea that the foods we eat have a direct impact on our overall health and well-being, and that by making dietary changes and incorporating specific nutrients, we can support the body's natural healing processes.

  Nutritional therapy is similar to other complementary and alternative therapies in that it focuses on treating the whole person rather than just the symptoms of a specific health condition. It is also related to other natural healing modalities such as herbal medicine and homeopathy, which use natural remedies to promote health and balance in the body.
  
  The effectiveness of nutritional therapy varies depending on the individual and their specific health concerns. However, research has shown that proper nutrition is essential for maintaining optimal health and preventing chronic disease.
  
  Nutritional therapy practitioners use a variety of techniques to assess their clients' nutritional needs and create personalized treatment plans. These may include:
  
  Dietary analysis: The practitioner will evaluate the client's current diet and make recommendations for dietary changes based on their health goals.
  
  Nutritional testing: This may include blood tests, urine analysis, and other diagnostic tests to evaluate nutrient levels and identify any deficiencies.
  
  Supplement recommendations: The practitioner may recommend specific supplements to address nutrient deficiencies or to support specific health concerns.
  
  Lifestyle changes: The practitioner may recommend lifestyle changes such as stress management techniques, exercise, and sleep hygiene to support overall health and well-being.
  
  Nutritional therapy can be used to address a wide range of health conditions, including digestive disorders, autoimmune disorders, hormonal imbalances, and chronic pain. It can also be used to support overall health and well-being, promote healthy aging, and prevent chronic disease.
  
  In general, nutritional therapy is considered safe when practiced by a qualified practitioner. However, it is important to work with a healthcare provider to ensure that nutritional therapy is appropriate for your specific health needs and that any dietary changes or supplements do not interact with any medications you may be taking.
  
  Overall, nutritional therapy is a holistic approach to healthcare that uses food and nutritional supplements to promote healing and prevent disease. While its effectiveness varies depending on the individual and their specific health concerns, many individuals have found it to be a beneficial complement to other forms of healthcare."
  image = "https://www.imi.com.hk/wp-content/uploads/2022/05/nutritional_therapy.png"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(nutritionaltherapy)

def colortherapy
  name = "Color Therapy"
  description = "Color therapy, also known as chromotherapy, is a complementary therapy that uses colors to promote healing and well-being. It is based on the principle that colors have different frequencies and vibrations that can affect the human body, mind, and emotions.

  Color therapy is similar to other complementary therapies in that it takes a holistic approach to healthcare, considering the whole person rather than just the symptoms of a specific health condition. It is also related to other natural healing modalities such as aromatherapy, crystal healing, and sound therapy, which also use natural methods to promote healing and balance in the body.
  
  The effectiveness of color therapy is debated in the medical community, but many practitioners and proponents of the therapy believe that it can be effective in promoting relaxation, reducing stress, and improving overall well-being. The therapy is generally considered safe, although it is important to note that it is not a replacement for traditional medical treatment.
  
  The techniques used in color therapy can vary, but they generally involve exposing the body to specific colors or wavelengths of light. Some common techniques include:
  
  Color visualization: This involves imagining or visualizing different colors and their associated meanings, such as red for energy and blue for relaxation.
  
  Colored light therapy: This involves exposing the body to specific wavelengths of light using colored lights or light therapy devices.
  
  Color bath therapy: This involves adding colored water or light filters to a bath or foot soak.
  
  Color meditation: This involves focusing on a specific color during meditation or deep breathing exercises.
  
  Color therapy can be used to address a wide range of health conditions, including depression, anxiety, chronic pain, and sleep disorders. It can also be used to promote relaxation, reduce stress, and improve overall well-being.
  
  While color therapy is generally considered safe, it is important to work with a qualified practitioner to ensure that it is appropriate for your specific health needs. It is also important to note that color therapy should not be used as a replacement for traditional medical treatment."
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeV5xHtBhu9rKKN5oqZC_FCDVevlOiIYd8fQ&usqp=CAU"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(colortherapy)

def chakrabalancing
  name = "Chakra Balancing"
  description = "Chakra balancing is a complementary therapy that aims to balance the seven chakras or energy centers in the body. The chakras are believed to be located along the spine and are associated with different physical, emotional, and spiritual functions.

  Chakra balancing is similar to other complementary therapies in that it takes a holistic approach to healthcare, considering the whole person rather than just the symptoms of a specific health condition. It is also related to other natural healing modalities such as aromatherapy, crystal healing, and sound therapy, which also use natural methods to promote healing and balance in the body.
  
  The effectiveness of chakra balancing is debated in the medical community, but many practitioners and proponents of the therapy believe that it can be effective in promoting relaxation, reducing stress, and improving overall well-being. The therapy is generally considered safe, although it is important to note that it is not a replacement for traditional medical treatment.
  
  The techniques used in chakra balancing can vary, but they generally involve using different modalities to balance the energy flow in the chakras. Some common techniques include:
  
  Meditation: This involves focusing on the chakras and using visualization techniques to balance the energy flow.
  
  Yoga: Certain yoga poses are believed to help balance the energy flow in specific chakras.
  
  Aromatherapy: Essential oils are used to stimulate and balance the energy flow in the chakras.
  
  Crystal healing: Certain crystals are believed to have healing properties and are used to balance the energy flow in the chakras.
  
  Sound therapy: Specific sounds or vibrations are used to balance the energy flow in the chakras.
  
  Chakra balancing can be used to address a wide range of health conditions, including anxiety, depression, chronic pain, and digestive issues. It can also be used to promote relaxation, reduce stress, and improve overall well-being.
  
  While chakra balancing is generally considered safe, it is important to work with a qualified practitioner to ensure that it is appropriate for your specific health needs. It is also important to note that chakra balancing should not be used as a replacement for traditional medical treatment."
  image = "https://d31ezp3r8jwmks.cloudfront.net/bqb3xekyty7tutnuncyv0m7uaifw"

  hash = {
    name: name,
    description: description,
    image: image
  }
  return hash
end
Service.create(chakrabalancing)

# def crystalhealing
#   name = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

# def crystalhealing
#   name = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

# def crystalhealing
#   name = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

# def crystalhealing
#   name = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

# def crystalhealing
#   name = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

# def crystalhealing
#   name = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

# def crystalhealing
#   name = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

svc1 = Service.find_by(name: "Reiki")
svc2 = Service.find_by(name: "Moxibustion")
svc3 = Service.find_by(name: "Nutritional Therapy")
svc4 = Service.find_by(name: "Biofeedback")

# 'HEALERS:'

def one
  hash = {
    full_name: "TEST One",
    bio: "This is a test. Not an actual healer.",
    email: "one@one.one",
    password: "1234",
    user_type: "healer",
    phone_number: "1231112222",
    lat: "43.048655",
    lon: "-76.215013",
    address: "ya can't find me!"
  }
  return hash
end
uno = User.create(one)

def two
  hash = {
    full_name: "TEST Two",
    bio: "This is still a test. Not an actual healer.",
    email: "two@two.two",
    password: "1234",
    user_type: "healer",
    phone_number: "1231112222",
    lat: "43.03449",
    lon: "-76.062067",
    address: "ya can't find me!"
  }
  return hash
end
dos = User.create(two)

def three
  hash = {
    full_name: "TEST Three",
    bio: "This is still still a test. Not an actual healer.",
    email: "three@three.three",
    password: "1234",
    user_type: "healer",
    phone_number: "1231112222",
    lat: "42.977419",
    lon: "-76.141077",
    address: "ya can't find me!"
  }
  return hash
end
tres = User.create(three)

uno.services << svc2
uno.services << svc4

dos.services << svc2
dos.services << svc3
dos.services << svc4

tres.services << svc1
tres.services << svc3
tres.services << svc4

puts "~ DONE SEEDING ~"