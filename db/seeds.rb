# SERVICES

# create_table "services", force: :cascade do |t|
#   t.string "name"
#   t.text "description"
#   t.string "image"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
#   t.string "desc"
# end

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
  image = "https://hips.hearstapps.com/hmg-prod/images/female-dancer-in-motion-royalty-free-image-1575472481.jpg"

  hash = {
    name: name,
    desc: desc,
    description: description,
    image: image
  }
  return hash
end
Service.create(dancetherapy)

# def crystalhealing
#   name = ""
#   desc = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     desc: desc,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

# def crystalhealing
#   name = ""
#   desc = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     desc: desc,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

# def crystalhealing
#   name = ""
#   desc = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     desc: desc,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

# def crystalhealing
#   name = ""
#   desc = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     desc: desc,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

# def crystalhealing
#   name = ""
#   desc = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     desc: desc,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

# def crystalhealing
#   name = ""
#   desc = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     desc: desc,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

# def crystalhealing
#   name = ""
#   desc = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     desc: desc,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

# def crystalhealing
#   name = ""
#   desc = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     desc: desc,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)

# def crystalhealing
#   name = ""
#   desc = ""
#   description = ""
#   image = ""

#   hash = {
#     name: name,
#     desc: desc,
#     description: description,
#     image: image
#   }
#   return hash
# end
# Service.create(crystalhealing)
