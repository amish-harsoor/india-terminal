const INDIA_POLITICS_DATA = {

  // Prime Ministers
  primeMinisters: [
    { id: 1, name: "Jawaharlal Nehru", party: "INC", from: "1947-08-15", to: "1964-05-27", tenure: "16y 9m", born: "1889-11-14", died: "1964-05-27", constituency: "Phulpur", coalition: "INC", notable: "First PM, Non-Alignment Policy, Panchsheel, Five-Year Plans", rating: "HISTORIC" },
    { id: 2, name: "Gulzarilal Nanda", party: "INC", from: "1964-05-27", to: "1964-06-09", tenure: "13 days", born: "1898-07-04", died: "1998-01-15", constituency: "Sabarkantha", coalition: "INC", notable: "Acting PM after Nehru's death", rating: "CARETAKER" },
    { id: 3, name: "Lal Bahadur Shastri", party: "INC", from: "1964-06-09", to: "1966-01-11", tenure: "1y 7m", born: "1904-10-02", died: "1966-01-11", constituency: "Allahabad", coalition: "INC", notable: "Jai Jawan Jai Kisan, 1965 Indo-Pak War, Tashkent Agreement", rating: "REVERED" },
    { id: 4, name: "Gulzarilal Nanda", party: "INC", from: "1966-01-11", to: "1966-01-24", tenure: "13 days", born: "1898-07-04", died: "1998-01-15", constituency: "Sabarkantha", coalition: "INC", notable: "Second stint as Acting PM", rating: "CARETAKER" },
    { id: 5, name: "Indira Gandhi", party: "INC", from: "1966-01-24", to: "1977-03-24", tenure: "11y 2m", born: "1917-11-19", died: "1984-10-31", constituency: "Rae Bareli", coalition: "INC", notable: "1971 Bangladesh War, Emergency 1975-77, Nationalization of Banks", rating: "CONTROVERSIAL" },
    { id: 6, name: "Morarji Desai", party: "JP", from: "1977-03-24", to: "1979-07-28", tenure: "2y 4m", born: "1896-02-29", died: "1995-04-10", constituency: "Surat", coalition: "Janata Party", notable: "First non-Congress PM, ended Emergency era", rating: "HISTORIC" },
    { id: 7, name: "Charan Singh", party: "JNP", from: "1979-07-28", to: "1980-01-14", tenure: "5m 16d", born: "1902-12-23", died: "1987-05-29", constituency: "Baghpat", coalition: "JNP", notable: "Never faced Parliament, shortest elected PM", rating: "BRIEF" },
    { id: 8, name: "Indira Gandhi", party: "INC", from: "1980-01-14", to: "1984-10-31", tenure: "4y 9m", born: "1917-11-19", died: "1984-10-31", constituency: "Medak", coalition: "INC", notable: "Operation Blue Star, assassinated by bodyguards", rating: "HISTORIC" },
    { id: 9, name: "Rajiv Gandhi", party: "INC", from: "1984-10-31", to: "1989-12-02", tenure: "5y 1m", born: "1944-08-20", died: "1991-05-21", constituency: "Amethi", coalition: "INC", notable: "Computerization, 1984 Anti-Sikh Riots, Bofors Scandal", rating: "REFORMIST" },
    { id: 10, name: "V.P. Singh", party: "JD", from: "1989-12-02", to: "1990-11-10", tenure: "11m 8d", born: "1931-06-25", died: "2008-11-27", constituency: "Fatehpur", coalition: "National Front", notable: "Mandal Commission implementation, Ayodhya crisis", rating: "REFORMIST" },
    { id: 11, name: "Chandra Shekhar", party: "SJP", from: "1990-11-10", to: "1991-06-21", tenure: "7m 11d", born: "1927-07-01", died: "2007-07-08", constituency: "Ballia", coalition: "Supported by INC", notable: "Minority govt, pledged gold reserves to IMF", rating: "BRIEF" },
    { id: 12, name: "P.V. Narasimha Rao", party: "INC", from: "1991-06-21", to: "1996-05-16", tenure: "4y 11m", born: "1921-06-28", died: "2004-12-23", constituency: "Nandyal", coalition: "INC", notable: "1991 Economic Liberalization, Manmohan Singh as FM, LPG Reforms", rating: "TRANSFORMATIVE" },
    { id: 13, name: "Atal Bihari Vajpayee", party: "BJP", from: "1996-05-16", to: "1996-06-01", tenure: "13 days", born: "1924-12-25", died: "2018-08-16", constituency: "Lucknow", coalition: "BJP", notable: "First BJP PM, resigned after no majority", rating: "BRIEF" },
    { id: 14, name: "H.D. Deve Gowda", party: "JD", from: "1996-06-01", to: "1997-04-21", tenure: "10m 20d", born: "1933-05-18", died: null, constituency: "Hassan", coalition: "United Front", notable: "Coalition PM, Kannada politician at helm", rating: "BRIEF" },
    { id: 15, name: "I.K. Gujral", party: "JD", from: "1997-04-21", to: "1998-03-19", tenure: "10m 28d", born: "1919-12-04", died: "2012-11-30", constituency: "Jalandhar", coalition: "United Front", notable: "Gujral Doctrine of foreign policy", rating: "BRIEF" },
    { id: 16, name: "Atal Bihari Vajpayee", party: "BJP", from: "1998-03-19", to: "2004-05-22", tenure: "6y 2m", born: "1924-12-25", died: "2018-08-16", constituency: "Lucknow", coalition: "NDA", notable: "Pokhran-II Nuclear Tests 1998, Kargil War 1999, Golden Quadrilateral, Lahore Bus Yatra", rating: "LANDMARK" },
    { id: 17, name: "Manmohan Singh", party: "INC", from: "2004-05-22", to: "2014-05-26", tenure: "10y 4d", born: "1932-09-26", died: "2024-12-26", constituency: "Assam (RS)", coalition: "UPA", notable: "Nuclear Deal with USA, MGNREGA, RTI, 2008 Financial Crisis management", rating: "LANDMARK" },
    { id: 18, name: "Narendra Modi", party: "BJP", from: "2014-05-26", to: null, tenure: "10y+", born: "1950-09-17", died: null, constituency: "Varanasi", coalition: "NDA", notable: "Digital India, Demonetization, GST, COVID-19, Article 370 revocation, CAA", rating: "CURRENT" },
  ],

  // Presidents
  presidents: [
    { name: "Rajendra Prasad", from: "1950-01-26", to: "1962-05-13", party: "INC" },
    { name: "S. Radhakrishnan", from: "1962-05-13", to: "1967-05-13", party: "INC" },
    { name: "Zakir Husain", from: "1967-05-13", to: "1969-05-03", party: "INC" },
    { name: "V.V. Giri", from: "1969-08-24", to: "1974-08-24", party: "INC" },
    { name: "Fakhruddin Ali Ahmed", from: "1974-08-24", to: "1977-02-11", party: "INC" },
    { name: "Neelam Sanjiva Reddy", from: "1977-07-25", to: "1982-07-25", party: "JP" },
    { name: "Giani Zail Singh", from: "1982-07-25", to: "1987-07-25", party: "INC" },
    { name: "R. Venkataraman", from: "1987-07-25", to: "1992-07-25", party: "INC" },
    { name: "Shankar Dayal Sharma", from: "1992-07-25", to: "1997-07-25", party: "INC" },
    { name: "K.R. Narayanan", from: "1997-07-25", to: "2002-07-25", party: "IND" },
    { name: "A.P.J. Abdul Kalam", from: "2002-07-25", to: "2007-07-25", party: "IND" },
    { name: "Pratibha Patil", from: "2007-07-25", to: "2012-07-25", party: "INC" },
    { name: "Pranab Mukherjee", from: "2012-07-25", to: "2017-07-25", party: "INC" },
    { name: "Ram Nath Kovind", from: "2017-07-25", to: "2022-07-25", party: "BJP" },
    { name: "Droupadi Murmu", from: "2022-07-25", to: null, party: "BJP" },
  ],

  // Major Political Parties
  parties: [
    { code: "INC", name: "Indian National Congress", founded: 1885, ideology: "Centre-Left, Social Democracy", president: "Mallikarjun Kharge", color: "#1a6b3c", seats2024: 99, seats2019: 52, seats2014: 44, stronghold: "Rajasthan, Himachal, Telangana" },
    { code: "BJP", name: "Bharatiya Janata Party", founded: 1980, ideology: "Right-Wing, Hindu Nationalism", president: "J.P. Nadda", color: "#ff6600", seats2024: 240, seats2019: 303, seats2014: 282, stronghold: "UP, Gujarat, MP, Rajasthan, Karnataka" },
    { code: "SP", name: "Samajwadi Party", founded: 1992, ideology: "Socialist, OBC Politics", president: "Akhilesh Yadav", color: "#ff0000", seats2024: 37, seats2019: 5, seats2014: 5, stronghold: "Uttar Pradesh" },
    { code: "TMC", name: "All India Trinamool Congress", founded: 1998, ideology: "Centre-Left, Bengali Nationalism", president: "Mamata Banerjee", color: "#00b4d8", seats2024: 29, seats2019: 22, seats2014: 34, stronghold: "West Bengal" },
    { code: "BSP", name: "Bahujan Samaj Party", founded: 1984, ideology: "Dalit Rights, Ambedkarism", president: "Mayawati", color: "#0000ff", seats2024: 0, seats2019: 10, seats2014: 0, stronghold: "Uttar Pradesh" },
    { code: "DMK", name: "Dravida Munnetra Kazhagam", founded: 1949, ideology: "Dravidian, Social Democracy", president: "M.K. Stalin", color: "#000000", seats2024: 22, seats2019: 23, seats2014: 0, stronghold: "Tamil Nadu" },
    { code: "NCP", name: "Nationalist Congress Party", founded: 1999, ideology: "Centre, Secular", president: "Sharad Pawar", color: "#006600", seats2024: 8, seats2019: 5, seats2014: 6, stronghold: "Maharashtra" },
    { code: "CPI(M)", name: "Communist Party of India (Marxist)", founded: 1964, ideology: "Marxism-Leninism", president: "Sitaram Yechury", color: "#cc0000", seats2024: 4, seats2019: 3, seats2014: 9, stronghold: "Kerala, Tripura" },
    { code: "SS", name: "Shiv Sena (Uddhav)", founded: 1966, ideology: "Marathi Nationalism, Hindutva", president: "Uddhav Thackeray", color: "#ff6600", seats2024: 9, seats2019: 18, seats2014: 18, stronghold: "Maharashtra" },
    { code: "YSRCP", name: "YSR Congress Party", founded: 2011, ideology: "Centre, Welfare Politics", president: "Y.S. Jagan Mohan Reddy", color: "#0066cc", seats2024: 4, seats2019: 22, seats2014: 9, stronghold: "Andhra Pradesh" },
    { code: "JDU", name: "Janata Dal (United)", founded: 2003, ideology: "Centre, Social Justice", president: "Nitish Kumar", color: "#00cc00", seats2024: 12, seats2019: 16, seats2014: 2, stronghold: "Bihar" },
    { code: "TDP", name: "Telugu Desam Party", founded: 1982, ideology: "Centre, Telugu Pride", president: "N. Chandrababu Naidu", color: "#ffff00", seats2024: 16, seats2019: 3, seats2014: 16, stronghold: "Andhra Pradesh" },
    { code: "AAP", name: "Aam Aadmi Party", founded: 2012, ideology: "Anti-Corruption, Populist", president: "Arvind Kejriwal", color: "#00aacc", seats2024: 3, seats2019: 1, seats2014: 4, stronghold: "Delhi, Punjab" },
    { code: "RJD", name: "Rashtriya Janata Dal", founded: 1997, ideology: "OBC Politics, Secular", president: "Lalu Prasad Yadav", color: "#006600", seats2024: 4, seats2019: 0, seats2014: 4, stronghold: "Bihar" },
    { code: "CPM", name: "Communist Party of India", founded: 1920, ideology: "Marxism, Socialism", president: "D. Raja", color: "#cc0000", seats2024: 2, seats2019: 2, seats2014: 1, stronghold: "Kerala" },
  ],

  // General Elections
  elections: [
    { year: 1951, winner: "INC", seats: 364, total: 489, voteShare: 44.99, runnerUp: "CPI", pm: "Nehru", turnout: 45.7, notes: "First General Election of Independent India" },
    { year: 1957, winner: "INC", seats: 371, total: 494, voteShare: 47.78, runnerUp: "CPI", pm: "Nehru", turnout: 47.7, notes: "Nehru's landslide second victory" },
    { year: 1962, winner: "INC", seats: 361, total: 494, voteShare: 44.72, runnerUp: "CPI", pm: "Nehru", turnout: 55.4, notes: "Post-Chinese war, INC victory" },
    { year: 1967, winner: "INC", seats: 283, total: 520, voteShare: 40.78, runnerUp: "Jana Sangh", pm: "Indira Gandhi", turnout: 61.3, notes: "INC weakened, Indira takes over" },
    { year: 1971, winner: "INC", seats: 352, total: 518, voteShare: 43.68, runnerUp: "CPM", pm: "Indira Gandhi", turnout: 55.3, notes: "Garibi Hatao campaign, Bangladesh War year" },
    { year: 1977, winner: "JP", seats: 295, total: 542, voteShare: 41.32, runnerUp: "INC", pm: "Morarji Desai", turnout: 60.5, notes: "Post-Emergency elections, INC routed" },
    { year: 1980, winner: "INC", seats: 353, total: 542, voteShare: 42.69, runnerUp: "JNP(S)", pm: "Indira Gandhi", turnout: 56.9, notes: "INC comeback after Janata collapse" },
    { year: 1984, winner: "INC", seats: 404, total: 514, voteShare: 48.12, runnerUp: "BJP", pm: "Rajiv Gandhi", turnout: 63.6, notes: "Sympathy wave after Indira assassination" },
    { year: 1989, winner: "JD", seats: 143, total: 529, voteShare: 17.79, runnerUp: "INC", pm: "V.P. Singh", turnout: 61.9, notes: "INC defeated, Bofors effect, Mandal era begins" },
    { year: 1991, winner: "INC", seats: 244, total: 521, voteShare: 36.26, runnerUp: "BJP", pm: "P.V. Narasimha Rao", turnout: 56.7, notes: "Rajiv Gandhi assassinated, economic crisis, liberalization" },
    { year: 1996, winner: "BJP", seats: 161, total: 543, voteShare: 20.29, runnerUp: "INC", pm: "H.D. Deve Gowda", turnout: 57.9, notes: "Hung parliament, BJP largest party but no majority" },
    { year: 1998, winner: "BJP", seats: 182, total: 543, voteShare: 25.59, runnerUp: "INC", pm: "Vajpayee", turnout: 61.97, notes: "NDA coalition, Vajpayee PM, Nuclear tests same year" },
    { year: 1999, winner: "BJP", seats: 182, total: 543, voteShare: 23.75, runnerUp: "INC", pm: "Vajpayee", turnout: 59.99, notes: "Post-Kargil War, NDA majority" },
    { year: 2004, winner: "INC", seats: 145, total: 543, voteShare: 26.53, runnerUp: "BJP", pm: "Manmohan Singh", turnout: 58.07, notes: "'India Shining' campaign fails, UPA surprises" },
    { year: 2009, winner: "INC", seats: 206, total: 543, voteShare: 28.55, runnerUp: "BJP", pm: "Manmohan Singh", turnout: 58.19, notes: "UPA-II, nuclear deal, economic growth" },
    { year: 2014, winner: "BJP", seats: 282, total: 543, voteShare: 31.0, runnerUp: "INC", pm: "Narendra Modi", turnout: 66.4, notes: "Modi wave, Congress worst performance ever, NDA 336" },
    { year: 2019, winner: "BJP", seats: 303, total: 543, voteShare: 37.36, runnerUp: "INC", pm: "Narendra Modi", turnout: 67.4, notes: "Post-Balakot, Modi landslide, NDA 352" },
    { year: 2024, winner: "BJP", seats: 240, total: 543, voteShare: 36.56, runnerUp: "INC", pm: "Narendra Modi", turnout: 65.79, notes: "BJP lost majority, NDA coalition continues, INDIA bloc strong" },
  ],

  // Major Events Timeline
  events: [
    { date: "1947-08-15", title: "Independence Day", category: "HISTORIC", description: "India gains independence from British rule. Nehru's 'Tryst with Destiny' speech.", impact: "CRITICAL" },
    { date: "1947-10-26", title: "Kashmir Accession", category: "CONFLICT", description: "Maharaja Hari Singh signs Instrument of Accession to India amid Pakistani tribal invasion.", impact: "CRITICAL" },
    { date: "1948-01-30", title: "Gandhi Assassination", category: "TRAGEDY", description: "Mahatma Gandhi assassinated by Nathuram Godse at Birla House, Delhi.", impact: "CRITICAL" },
    { date: "1950-01-26", title: "Republic Day", category: "CONSTITUTIONAL", description: "Constitution of India comes into effect. India becomes a Republic.", impact: "CRITICAL" },
    { date: "1951-01-01", title: "First Five Year Plan", category: "ECONOMIC", description: "India's first Five Year Plan launched focusing on agriculture and infrastructure.", impact: "HIGH" },
    { date: "1952-01-01", title: "First General Elections", category: "POLITICAL", description: "India's first democratic elections post-independence. INC wins 364 seats.", impact: "CRITICAL" },
    { date: "1952-01-01", title: "Second Five Year Plan", category: "ECONOMIC", description: "Focus on heavy industry and public sector expansion.", impact: "HIGH" },
    { date: "1952-11-15", title: "Naga Insurgency Begins", category: "CONFLICT", description: "Naga National Council declares independence. Armed conflict begins in Nagaland.", impact: "MEDIUM" },
    { date: "1953-01-01", title: "States Reorganization", category: "POLITICAL", description: "States Commission recommends reorganization on linguistic lines.", impact: "HIGH" },
    { date: "1956-01-01", title: "Third Five Year Plan", category: "ECONOMIC", description: "Balanced regional development and agriculture focus.", impact: "HIGH" },
    { date: "1959-08-25", title: "Longju Incident", category: "CONFLICT", description: "India-China border clash at Longju in NEFA. First major incident post-1950s.", impact: "MEDIUM" },
    { date: "1961-01-01", title: "Fourth Five Year Plan", category: "ECONOMIC", description: "Self-reliance in food production, green revolution foundations.", impact: "HIGH" },
    { date: "1962-10-20", title: "Sino-Indian War", category: "CONFLICT", description: "China attacks India along Himalayan borders. India suffers military defeat.", impact: "CRITICAL" },
    { date: "1963-01-01", title: "Nepal Peace Treaty", category: "FOREIGN", description: "India-Nepal treaty strengthening bilateral relations.", impact: "MEDIUM" },
    { date: "1964-05-27", title: "Nehru Dies", category: "POLITICAL", description: "First PM Jawaharlal Nehru dies in office after 17 years.", impact: "CRITICAL" },
    { date: "1965-01-01", title: "Anti-Hindi Agitations", category: "SOCIAL", description: "Anti-Hindi protests in Tamil Nadu against imposition.", impact: "MEDIUM" },
    { date: "1965-08-05", title: "Indo-Pak War 1965", category: "CONFLICT", description: "Pakistan's Operation Gibraltar triggers Second Kashmir War. Tashkent Agreement follows.", impact: "CRITICAL" },
    { date: "1966-01-01", title: "Fifth Five Year Plan", category: "ECONOMIC", description: "Post-war recovery and poverty alleviation focus.", impact: "HIGH" },
    { date: "1966-01-11", title: "Shastri Dies in Tashkent", category: "TRAGEDY", description: "PM Lal Bahadur Shastri dies mysteriously in Tashkent after peace agreement signing.", impact: "HIGH" },
    { date: "1967-01-01", title: "Green Revolution Begins", category: "ECONOMIC", description: "India's agricultural transformation begins with high-yield wheat varieties in Punjab.", impact: "HIGH" },
    { date: "1967-05-25", title: "Naxalbari Uprising", category: "CONFLICT", description: "Communist revolutionaries launch armed struggle in Naxalbari, West Bengal. Naxalite movement begins.", impact: "HIGH" },
    { date: "1969-09-18", title: "Gujarat Communal Riots", category: "VIOLENCE", description: "Major communal violence between Hindus and Muslims in Gujarat. 660 killed.", impact: "MEDIUM" },
    { date: "1970-01-01", title: "Bank Nationalization", category: "ECONOMIC", description: "14 major banks nationalized for better credit distribution to rural areas.", impact: "HIGH" },
    { date: "1971-12-16", title: "Bangladesh Liberation", category: "HISTORIC", description: "Indian Army wins decisive victory, Pakistan surrenders, Bangladesh created. India's finest military hour.", impact: "CRITICAL" },
    { date: "1972-01-01", title: "Shimla Agreement", category: "FOREIGN", description: "India-Pakistan agreement on Kashmir ceasefire line.", impact: "HIGH" },
    { date: "1973-01-01", title: "Oil Crisis Impact", category: "ECONOMIC", description: "Global oil crisis affects Indian economy and imports.", impact: "MEDIUM" },
    { date: "1974-01-01", title: "Sixth Five Year Plan", category: "ECONOMIC", description: "Garibi Hatao slogan, poverty eradication focus.", impact: "HIGH" },
    { date: "1974-05-18", title: "Smiling Buddha - Nuclear Test", category: "DEFENCE", description: "India's first nuclear test at Pokhran, Rajasthan. India joins nuclear club.", impact: "CRITICAL" },
    { date: "1974-05-08", title: "Railway Strike 1974", category: "CONFLICT", description: "Massive railway workers strike led by George Fernandes. 17 million workers participate.", impact: "MEDIUM" },
    { date: "1975-06-25", title: "Emergency Declared", category: "POLITICAL", description: "Indira Gandhi declares National Emergency. Civil liberties suspended, press censored.", impact: "CRITICAL" },
    { date: "1977-01-01", title: "Janata Party Government", category: "POLITICAL", description: "First non-Congress government formed after Emergency.", impact: "HIGH" },
    { date: "1977-03-21", title: "Emergency Lifted", category: "POLITICAL", description: "Emergency ends, elections held, Janata Party wins, Morarji Desai becomes PM.", impact: "CRITICAL" },
    { date: "1978-01-01", title: "Janata Government Crisis", category: "POLITICAL", description: "Internal conflicts in Janata Party government.", impact: "MEDIUM" },
    { date: "1980-01-01", title: "Seventh Five Year Plan", category: "ECONOMIC", description: "Food, work, productivity focus.", impact: "HIGH" },
    { date: "1980-06-23", title: "Sanjay Gandhi Dies", category: "TRAGEDY", description: "Sanjay Gandhi, Indira's political heir, dies in plane crash over Delhi.", impact: "HIGH" },
    { date: "1983-01-01", title: "Assam Accord", category: "POLITICAL", description: "Assam agitation resolved with central accord.", impact: "MEDIUM" },
    { date: "1984-06-06", title: "Operation Blue Star", category: "CONFLICT", description: "Indian Army storms Golden Temple in Amritsar to remove Sikh militants. 500+ killed.", impact: "CRITICAL" },
    { date: "1984-10-31", title: "Indira Gandhi Assassinated", category: "TRAGEDY", description: "PM Indira Gandhi shot by her Sikh bodyguards. Rajiv Gandhi becomes PM.", impact: "CRITICAL" },
    { date: "1984-11-01", title: "Anti-Sikh Riots", category: "VIOLENCE", description: "Widespread violence against Sikhs following Indira's assassination. 3000+ killed in Delhi.", impact: "CRITICAL" },
    { date: "1985-01-01", title: "Eighth Five Year Plan", category: "ECONOMIC", description: "Liberalization beginnings, growth acceleration.", impact: "HIGH" },
    { date: "1985-01-01", title: "Rajiv-Longowal Accord", category: "POLITICAL", description: "Punjab accord with Akali Dal to resolve militancy.", impact: "MEDIUM" },
    { date: "1986-06-15", title: "Assam Agitation", category: "CONFLICT", description: "All Assam Students Union launches anti-foreigner movement. 855 killed in violence.", impact: "MEDIUM" },
    { date: "1986-07-15", title: "Sumdorong Chu Standoff", category: "CONFLICT", description: "India-China military standoff at Sumdorong Chu in Arunachal Pradesh.", impact: "MEDIUM" },
    { date: "1987-07-29", title: "Sri Lanka IPKF", category: "FOREIGN", description: "Indian Peace Keeping Force deployed in Sri Lanka under Indo-Sri Lanka Accord.", impact: "HIGH" },
    { date: "1987-12-01", title: "Wangdung Incident", category: "CONFLICT", description: "India-China border clash at Wangdung in Arunachal Pradesh. 3 Indian soldiers killed.", impact: "MEDIUM" },
    { date: "1988-01-01", title: "IPKF Withdrawal Begins", category: "FOREIGN", description: "Indian Peace Keeping Force begins withdrawal from Sri Lanka.", impact: "MEDIUM" },
    { date: "1989-12-08", title: "Mandal Commission Report", category: "SOCIAL", description: "V.P. Singh implements Mandal Commission, reserves 27% govt jobs for OBCs. Political earthquake.", impact: "CRITICAL" },
    { date: "1990-01-01", title: "VP Singh Government", category: "POLITICAL", description: "VP Singh becomes PM, Mandal implementation leads to protests.", impact: "HIGH" },
    { date: "1991-05-21", title: "Rajiv Gandhi Assassinated", category: "TRAGEDY", description: "Former PM Rajiv Gandhi assassinated by LTTE suicide bomber in Sriperumbudur.", impact: "CRITICAL" },
    { date: "1991-07-24", title: "Economic Liberalization", category: "ECONOMIC", description: "Manmohan Singh's landmark budget opens Indian economy. LPG reforms begin.", impact: "CRITICAL" },
    { date: "1992-01-01", title: "Ninth Five Year Plan", category: "ECONOMIC", description: "Human development and employment generation.", impact: "HIGH" },
    { date: "1992-12-06", title: "Babri Masjid Demolition", category: "COMMUNAL", description: "Mob demolishes 16th century Babri Mosque in Ayodhya. Nationwide riots follow.", impact: "CRITICAL" },
    { date: "1992-12-08", title: "Mumbai Riots", category: "VIOLENCE", description: "Communal riots in Mumbai after Babri demolition. 900+ killed across India.", impact: "MEDIUM" },
    { date: "1993-03-12", title: "Mumbai Bomb Blasts", category: "TERRORISM", description: "13 coordinated bomb blasts rock Mumbai. 257 killed, 700+ injured.", impact: "CRITICAL" },
    { date: "1995-01-01", title: "Babri Aftermath Violence", category: "VIOLENCE", description: "Continued communal violence following mosque demolition.", impact: "MEDIUM" },
    { date: "1996-01-01", title: "Telecom Revolution", category: "ECONOMIC", description: "Private telecom operators licensed. Mobile phone era begins in India.", impact: "HIGH" },
    { date: "1997-01-01", title: "Tenth Five Year Plan", category: "ECONOMIC", description: "Inclusive growth and infrastructure focus.", impact: "HIGH" },
    { date: "1997-01-01", title: "I.K. Gujral Doctrine", category: "FOREIGN", description: "New foreign policy doctrine for South Asian neighbors.", impact: "MEDIUM" },
    { date: "1998-05-11", title: "Pokhran-II Nuclear Tests", category: "DEFENCE", description: "India conducts 5 nuclear tests under Operation Shakti. Vajpayee declares India nuclear power.", impact: "CRITICAL" },
    { date: "1999-05-03", title: "Kargil War", category: "CONFLICT", description: "Pakistani soldiers infiltrate Kargil heights. Indian Army launches Operation Vijay.", impact: "CRITICAL" },
    { date: "1999-07-26", title: "Kargil Victory", category: "DEFENCE", description: "India recaptures Kargil peaks. Pakistan retreats. India's strategic victory.", impact: "CRITICAL" },
    { date: "2000-01-01", title: "Pokhran Sanctions Lifted", category: "FOREIGN", description: "International sanctions gradually lifted after nuclear tests.", impact: "MEDIUM" },
    { date: "2001-12-13", title: "Parliament Attack", category: "TERRORISM", description: "LeT and JeM terrorists attack Indian Parliament. 9 security personnel killed.", impact: "CRITICAL" },
    { date: "2002-01-01", title: "Eleventh Five Year Plan", category: "ECONOMIC", description: "Faster and more inclusive growth.", impact: "HIGH" },
    { date: "2002-02-27", title: "Godhra Train Burning", category: "VIOLENCE", description: "Sabarmati Express burned in Godhra, 58 karsevaks killed. Gujarat riots follow. 1000+ dead.", impact: "CRITICAL" },
    { date: "2003-01-01", title: "India-US Nuclear Deal", category: "FOREIGN", description: "Civil nuclear cooperation agreement signed.", impact: "HIGH" },
    { date: "2004-05-22", title: "UPA Surprise Win", category: "POLITICAL", description: "INC-led UPA defeats NDA. India Shining campaign fails. Manmohan Singh becomes PM.", impact: "HIGH" },
    { date: "2005-01-01", title: "Tsunami Relief Operations", category: "GOVERNANCE", description: "India's massive relief operations after 2004 tsunami.", impact: "MEDIUM" },
    { date: "2005-10-26", title: "Delhi Bomb Blasts", category: "TERRORISM", description: "Serial bomb blasts in Delhi markets before Diwali. 62 killed.", impact: "HIGH" },
    { date: "2006-07-11", title: "Mumbai Train Bombings", category: "TERRORISM", description: "7 coordinated bombs on Mumbai suburban trains. 209 killed, 700+ injured.", impact: "CRITICAL" },
    { date: "2007-01-01", title: "Twelfth Five Year Plan", category: "ECONOMIC", description: "Sustainable development and social inclusion.", impact: "HIGH" },
    { date: "2007-01-01", title: "Farm Loan Waivers", category: "ECONOMIC", description: "Several states announce farm loan waivers.", impact: "MEDIUM" },
    { date: "2008-01-01", title: "Mumbai Attacks Aftermath", category: "TERRORISM", description: "Government response and security reforms post-26/11.", impact: "MEDIUM" },
    { date: "2008-05-13", title: "Jaipur Bombings", category: "TERRORISM", description: "8 synchronized bomb blasts in Jaipur markets. 63 killed, 216 injured.", impact: "HIGH" },
    { date: "2008-07-26", title: "Ahmedabad Serial Blasts", category: "TERRORISM", description: "21 bomb blasts across Ahmedabad in 70 minutes. 56 killed, 200+ injured.", impact: "HIGH" },
    { date: "2008-09-13", title: "Delhi Bombings", category: "TERRORISM", description: "5 bomb blasts in Delhi. 30 killed, 100+ injured.", impact: "HIGH" },
    { date: "2008-11-26", title: "26/11 Mumbai Attacks", category: "TERRORISM", description: "10 Pakistani terrorists attack multiple Mumbai sites. 166 killed. 3-day siege.", impact: "CRITICAL" },
    { date: "2009-01-01", title: "Naxalite Surge", category: "CONFLICT", description: "Rising Naxal violence in central India, declared national threat.", impact: "MEDIUM" },
    { date: "2009-01-01", title: "MGNREGA Impact", category: "SOCIAL", description: "India's largest employment guarantee scheme transforms rural India.", impact: "HIGH" },
    { date: "2010-01-01", title: "2G Scam Investigations", category: "POLITICAL", description: "CBI investigations into telecom spectrum allocation scam.", impact: "MEDIUM" },
    { date: "2010-02-13", title: "Pune Bombing", category: "TERRORISM", description: "Bomb blast at Pune's German Bakery. 17 killed, 60 injured.", impact: "MEDIUM" },
    { date: "2011-01-01", title: "Thirteenth Five Year Plan", category: "ECONOMIC", description: "Accelerated and sustainable growth.", impact: "HIGH" },
    { date: "2011-04-09", title: "Anna Hazare Movement", category: "POLITICAL", description: "Anti-corruption movement at Jantar Mantar. Led to AAP formation.", impact: "HIGH" },
    { date: "2011-07-13", title: "Mumbai Serial Blasts", category: "TERRORISM", description: "3 bomb blasts in Mumbai. 26 killed, 130 injured.", impact: "HIGH" },
    { date: "2011-08-01", title: "RTI Impact", category: "GOVERNANCE", description: "Right to Information Act transforms governance transparency in India.", impact: "HIGH" },
    { date: "2012-01-01", title: "Delhi Gang Rape Case", category: "VIOLENCE", description: "Nirbhaya case sparks nationwide protests for women's safety.", impact: "MEDIUM" },
    { date: "2012-01-01", title: "Coal Scam Revelations", category: "POLITICAL", description: "Supreme Court orders reallocation of coal blocks.", impact: "MEDIUM" },
    { date: "2013-02-21", title: "Hyderabad Blasts", category: "TERRORISM", description: "2 blasts near Hyderabad's Mecca Masjid. 16 killed, 119 injured.", impact: "MEDIUM" },
    { date: "2013-04-15", title: "Daulat Beg Oldi Incident", category: "CONFLICT", description: "India-China face-off at Daulat Beg Oldi in Ladakh. 50-day standoff.", impact: "MEDIUM" },
    { date: "2013-07-07", title: "Bodh Gaya Bombings", category: "TERRORISM", description: "2 blasts at Mahabodhi Temple in Bodh Gaya. 5 killed, 8 injured.", impact: "MEDIUM" },
    { date: "2013-12-08", title: "AAP wins Delhi", category: "POLITICAL", description: "Aam Aadmi Party wins Delhi in shock result. New political force emerges.", impact: "HIGH" },
    { date: "2014-05-25", title: "Chhattisgarh Attack", category: "TERRORISM", description: "Naxal attack on Congress convoy in Chhattisgarh. 27 killed including state leaders.", impact: "MEDIUM" },
    { date: "2014-05-26", title: "Modi Sworn in", category: "POLITICAL", description: "Narendra Modi sworn as 14th PM. BJP wins 282 seats alone. Historic mandate.", impact: "CRITICAL" },
    { date: "2014-09-16", title: "Chumar Incident", category: "CONFLICT", description: "India-China border clash at Chumar in Ladakh. Multiple incidents.", impact: "MEDIUM" },
    { date: "2015-01-01", title: "Paris Climate Agreement", category: "FOREIGN", description: "India ratifies Paris climate accord.", impact: "MEDIUM" },
    { date: "2015-07-27", title: "Gurdaspur Attack", category: "TERRORISM", description: "Terrorist attack on police station in Gurdaspur. 7 killed including attackers.", impact: "MEDIUM" },
    { date: "2016-01-01", title: "Surgical Strikes", category: "DEFENCE", description: "Indian Army conducts surgical strikes across LoC.", impact: "HIGH" },
    { date: "2016-01-02", title: "Pathankot Attack", category: "TERRORISM", description: "Terrorist attack on Pathankot Air Force Station. 7 security personnel killed.", impact: "HIGH" },
    { date: "2016-09-18", title: "Uri Attack", category: "TERRORISM", description: "Terrorist attack on army camp in Uri, Kashmir. 19 soldiers killed.", impact: "HIGH" },
    { date: "2016-11-08", title: "Demonetization", category: "ECONOMIC", description: "Modi announces withdrawal of ₹500 and ₹1000 notes. 86% of currency invalidated.", impact: "CRITICAL" },
    { date: "2017-01-01", title: "RERA Act Implementation", category: "ECONOMIC", description: "Real Estate Regulatory Authority Act comes into force.", impact: "MEDIUM" },
    { date: "2017-06-16", title: "Doklam Standoff", category: "CONFLICT", description: "73-day military standoff between India and China at Doklam plateau.", impact: "HIGH" },
    { date: "2017-07-01", title: "GST Launched", category: "ECONOMIC", description: "Goods and Services Tax replaces complex multi-tax system. 'One Nation One Tax'.", impact: "HIGH" },
    { date: "2017-07-10", title: "Amarnath Yatra Attack", category: "TERRORISM", description: "Gun attack on Amarnath pilgrims in Kashmir. 8 killed, 18 injured.", impact: "MEDIUM" },
    { date: "2018-01-01", title: "Rafale Deal Controversy", category: "POLITICAL", description: "Opposition alleges irregularities in Rafale fighter jet deal.", impact: "MEDIUM" },
    { date: "2018-02-10", title: "Sunjuwan Attack", category: "TERRORISM", description: "Terrorist attack on CRPF convoy in Sunjuwan, Jammu. 6 killed.", impact: "MEDIUM" },
    { date: "2018-06-18", title: "Awantipora Attack", category: "TERRORISM", description: "Terrorist attack on police station in Awantipora, Kashmir. 6 killed.", impact: "MEDIUM" },
    { date: "2019-01-01", title: "Citizenship Act Protests", category: "POLITICAL", description: "Nationwide protests against Citizenship Amendment Act.", impact: "HIGH" },
    { date: "2019-01-04", title: "Handwara Attack", category: "TERRORISM", description: "Terrorist attack on CRPF camp in Handwara, Kashmir. 3 killed.", impact: "MEDIUM" },
    { date: "2019-02-14", title: "Pulwama Attack", category: "TERRORISM", description: "40 CRPF soldiers killed in Pulwama IED attack. India-Pak tensions soar.", impact: "CRITICAL" },
    { date: "2019-02-26", title: "Balakot Airstrikes", category: "DEFENCE", description: "IAF strikes JeM camp in Balakot, Pakistan. First cross-border airstrikes since 1971.", impact: "CRITICAL" },
    { date: "2019-06-21", title: "Lethpora Attack", category: "TERRORISM", description: "Terrorist attack on CRPF patrol in Lethpora, Kashmir. 3 killed.", impact: "MEDIUM" },
    { date: "2019-08-05", title: "Article 370 Revoked", category: "CONSTITUTIONAL", description: "J&K's special status revoked. State bifurcated into two UTs. Historic decision.", impact: "CRITICAL" },
    { date: "2019-11-09", title: "Ayodhya Verdict", category: "JUDICIAL", description: "Supreme Court awards disputed Ram Janmabhoomi site to Hindus. Mosque land elsewhere.", impact: "CRITICAL" },
    { date: "2019-12-11", title: "CAA Passed", category: "POLITICAL", description: "Citizenship Amendment Act passed, granting citizenship to non-Muslim minorities from 3 countries.", impact: "CRITICAL" },
    { date: "2020-01-01", title: "Farmers Protests Begin", category: "POLITICAL", description: "Farmers begin protests against farm laws in Delhi borders.", impact: "HIGH" },
    { date: "2020-03-24", title: "COVID-19 Lockdown", category: "CRISIS", description: "India announces world's largest lockdown. 1.3 billion people confined to homes.", impact: "CRITICAL" },
    { date: "2020-06-15", title: "Galwan Valley Clash", category: "CONFLICT", description: "20 Indian soldiers killed in clash with China at Galwan Valley, Ladakh.", impact: "CRITICAL" },
    { date: "2020-11-03", title: "Lethpora Attack", category: "TERRORISM", description: "Terrorist attack on CRPF convoy in Lethpora, Kashmir. 2 killed.", impact: "MEDIUM" },
    { date: "2021-01-01", title: "Farm Laws Repealed", category: "POLITICAL", description: "Government repeals three controversial farm laws.", impact: "HIGH" },
    { date: "2021-01-16", title: "COVID Vaccination Drive", category: "GOVERNANCE", description: "India launches world's largest vaccination drive. Covishield and Covaxin administered.", impact: "HIGH" },
    { date: "2021-11-04", title: "Nagrota Attack", category: "TERRORISM", description: "Terrorist attack on army camp in Nagrota, Jammu. 1 killed.", impact: "MEDIUM" },
    { date: "2022-01-01", title: "IPL Returns", category: "SOCIAL", description: "Indian Premier League resumes after COVID hiatus.", impact: "LOW" },
    { date: "2022-06-09", title: "Reasi Attack", category: "TERRORISM", description: "Terrorist attack on police station in Reasi, Jammu. 5 killed.", impact: "MEDIUM" },
    { date: "2022-07-25", title: "Droupadi Murmu President", category: "POLITICAL", description: "First tribal woman elected as President of India. Historic milestone.", impact: "HIGH" },
    { date: "2022-10-22", title: "Rajouri Attack", category: "TERRORISM", description: "Terrorist attack on police convoy in Rajouri, Jammu. 2 killed.", impact: "MEDIUM" },
    { date: "2023-01-01", title: "Women's Reservation Bill", category: "POLITICAL", description: "Women's reservation in Parliament and assemblies passed.", impact: "HIGH" },
    { date: "2023-10-01", title: "Jammu Attack", category: "TERRORISM", description: "Terrorist attack on police station in Jammu. 1 killed.", impact: "MEDIUM" },
    { date: "2024-01-22", title: "Ram Mandir Consecration", category: "HISTORIC", description: "PM Modi consecrates Ram Temple in Ayodhya. 500-year dispute concludes.", impact: "CRITICAL" },
    { date: "2024-06-04", title: "2024 Elections Result", category: "POLITICAL", description: "BJP wins 240 seats, loses majority. NDA forms coalition govt. INDIA bloc gets 234.", impact: "CRITICAL" },
    { date: "2024-06-09", title: "Reasi Attack", category: "TERRORISM", description: "Terrorist attack on BSF camp in Reasi, Jammu. 9 killed including civilians.", impact: "HIGH" },
    { date: "2024-06-09", title: "NDA Coalition Formed", category: "POLITICAL", description: "BJP-led NDA forms coalition government with TDP, JDU, and regional parties.", impact: "CRITICAL" },
    { date: "2024-06-10", title: "Modi Third Term", category: "POLITICAL", description: "Narendra Modi sworn in as Prime Minister for third consecutive term.", impact: "CRITICAL" },
    { date: "2024-07-01", title: "Union Budget 2024-25", category: "ECONOMIC", description: "Finance Minister presents budget with focus on infrastructure, employment, and welfare.", impact: "HIGH" },
    { date: "2024-08-15", title: "Independence Day 2024", category: "HISTORIC", description: "77th Independence Day celebrations with focus on Viksit Bharat.", impact: "MEDIUM" },
    { date: "2024-09-15", title: "G20 Summit in India", category: "FOREIGN", description: "India successfully hosts G20 leaders summit, strengthening global position.", impact: "HIGH" },
    { date: "2024-11-15", title: "Delhi Assembly Elections", category: "POLITICAL", description: "BJP wins Delhi assembly elections, defeating AAP.", impact: "MEDIUM" },
    { date: "2025-01-26", title: "Republic Day 2025", category: "CONSTITUTIONAL", description: "76th Republic Day celebrations with women's reservation theme.", impact: "MEDIUM" },
    { date: "2025-02-05", title: "Delhi Election Results", category: "POLITICAL", description: "BJP secures 48 seats in Delhi assembly, forms government.", impact: "MEDIUM" },
    { date: "2025-03-15", title: "Parliament Budget Session", category: "POLITICAL", description: "Budget session discusses economic reforms and development plans.", impact: "MEDIUM" },
    { date: "2025-11-10", title: "Delhi Attack 2025", category: "TERRORISM", description: "Car explosion near Red Fort in Delhi. 15 killed, 20+ injured. Labeled as terrorist act by government.", impact: "HIGH" },
    { date: "2025-08-10", title: "Pahalgam Attack", category: "TERRORISM", description: "Terrorist attack on tourists in Pahalgam, Kashmir. 12 killed including foreign nationals.", impact: "HIGH" },
    { date: "2025-08-15", title: "Independence Day 2025", category: "HISTORIC", description: "78th Independence Day with digital transformation focus.", impact: "MEDIUM" },
    { date: "2025-11-06", title: "Bihar Assembly Elections", category: "POLITICAL", description: "NDA alliance wins Bihar assembly elections with comfortable majority.", impact: "MEDIUM" },
    { date: "2026-01-01", title: "New Year Economic Survey", category: "ECONOMIC", description: "Government releases annual economic survey projecting growth.", impact: "MEDIUM" },
    { date: "2026-01-26", title: "Republic Day 2026", category: "CONSTITUTIONAL", description: "77th Republic Day with inclusive development theme.", impact: "MEDIUM" },
    { date: "2026-02-14", title: "Valentine's Day Protests", category: "SOCIAL", description: "Continued restrictions on Valentine's Day celebrations in some areas.", impact: "LOW" },
    { date: "2026-02-28", title: "Union Budget 2026-27", category: "ECONOMIC", description: "Budget focuses on digital economy, green energy, and job creation.", impact: "HIGH" },
    { date: "2026-03-01", title: "International Women's Day", category: "SOCIAL", description: "Nationwide celebrations marking International Women's Day.", impact: "MEDIUM" }
  ],

  // State Chief Ministers (current)
  chiefMinisters: [
    { state: "Andhra Pradesh", cm: "N. Chandrababu Naidu", party: "TDP", since: "2024" },
    { state: "Arunachal Pradesh", cm: "Pema Khandu", party: "BJP", since: "2016" },
    { state: "Assam", cm: "Himanta Biswa Sarma", party: "BJP", since: "2021" },
    { state: "Bihar", cm: "Nitish Kumar", party: "JDU", since: "2024" },
    { state: "Chhattisgarh", cm: "Vishnu Deo Sai", party: "BJP", since: "2023" },
    { state: "Goa", cm: "Pramod Sawant", party: "BJP", since: "2019" },
    { state: "Gujarat", cm: "Bhupendra Patel", party: "BJP", since: "2021" },
    { state: "Haryana", cm: "Nayab Singh Saini", party: "BJP", since: "2024" },
    { state: "Himachal Pradesh", cm: "Sukhvinder Singh Sukhu", party: "INC", since: "2022" },
    { state: "Jharkhand", cm: "Hemant Soren", party: "JMM", since: "2024" },
    { state: "Karnataka", cm: "Siddaramaiah", party: "INC", since: "2023" },
    { state: "Kerala", cm: "Pinarayi Vijayan", party: "CPI(M)", since: "2016" },
    { state: "Madhya Pradesh", cm: "Mohan Yadav", party: "BJP", since: "2023" },
    { state: "Maharashtra", cm: "Devendra Fadnavis", party: "BJP", since: "2024" },
    { state: "Manipur", cm: "N. Biren Singh", party: "BJP", since: "2017" },
    { state: "Meghalaya", cm: "Conrad Sangma", party: "NPP", since: "2018" },
    { state: "Mizoram", cm: "Lalduhoma", party: "ZPM", since: "2023" },
    { state: "Nagaland", cm: "Neiphiu Rio", party: "NDPP", since: "2018" },
    { state: "Odisha", cm: "Mohan Majhi", party: "BJP", since: "2024" },
    { state: "Punjab", cm: "Bhagwant Mann", party: "AAP", since: "2022" },
    { state: "Rajasthan", cm: "Bhajan Lal Sharma", party: "BJP", since: "2023" },
    { state: "Sikkim", cm: "P.S. Tamang", party: "SKM", since: "2019" },
    { state: "Tamil Nadu", cm: "M.K. Stalin", party: "DMK", since: "2021" },
    { state: "Telangana", cm: "A. Revanth Reddy", party: "INC", since: "2023" },
    { state: "Tripura", cm: "Manik Saha", party: "BJP", since: "2022" },
    { state: "Uttar Pradesh", cm: "Yogi Adityanath", party: "BJP", since: "2017" },
    { state: "Uttarakhand", cm: "Pushkar Singh Dhami", party: "BJP", since: "2021" },
    { state: "West Bengal", cm: "Mamata Banerjee", party: "TMC", since: "2011" },
    { state: "Delhi", cm: "Rekha Gupta", party: "BJP", since: "2025" },
  ],

  // Notable Political Scandals
  scandals: [
    { year: 1987, name: "Bofors Scandal", pm: "Rajiv Gandhi", amount: "₹64 crore", description: "Kickbacks in Bofors howitzer deal. Ottavio Quattrocchi named. Led to Rajiv defeat in 1989.", severity: "CRITICAL" },
    { year: 1992, name: "Harshad Mehta Securities Scam", amount: "₹5000 crore", description: "Stock market manipulation, political connections. Market crash. Triggered Rao govt crisis.", severity: "HIGH" },
    { year: 1993, name: "JMM Bribery Case", pm: "P.V. Narasimha Rao", amount: "N/A", description: "Jharkhand MPs bribed to vote in no-confidence motion against Rao govt.", severity: "HIGH" },
    { year: 1996, name: "Hawala Scandal", amount: "₹65 crore", description: "Politicians across parties named in hawala transactions. L.K. Advani resigned from Parliament.", severity: "HIGH" },
    { year: 2001, name: "Tehelka Sting Operation", amount: "N/A", description: "Defence officials caught accepting bribes for contracts. George Fernandes resigned.", severity: "HIGH" },
    { year: 2008, name: "2G Spectrum Scam", pm: "Manmohan Singh", amount: "₹1.76 lakh crore", description: "Telecom spectrum allocated below market price. A. Raja jailed. CAG report scandalous.", severity: "CRITICAL" },
    { year: 2010, name: "Commonwealth Games Scam", amount: "₹70,000 crore", description: "Widespread corruption in CWG 2010 preparation. Suresh Kalmadi jailed.", severity: "HIGH" },
    { year: 2011, name: "Adarsh Housing Scam", amount: "N/A", description: "Mumbai building meant for Kargil widows taken over by politicians and bureaucrats.", severity: "MEDIUM" },
    { year: 2012, name: "Coal Block Allocation Scam", pm: "Manmohan Singh", amount: "₹1.86 lakh crore", description: "CAG estimated loss from coal block allotments without auction. Coalgate.", severity: "CRITICAL" },
    { year: 2013, name: "Saradha Chit Fund Scam", amount: "₹2500 crore", description: "Ponzi scheme in Bengal. TMC politicians implicated. Millions of small investors defrauded.", severity: "HIGH" },
    { year: 2016, name: "Panama Papers India", amount: "N/A", description: "400+ Indians named in offshore accounts. Politicians, businessmen, Bollywood stars.", severity: "HIGH" },
    { year: 2018, name: "PNB-Nirav Modi Scam", amount: "₹13,578 crore", description: "Nirav Modi and Mehul Choksi flee India after PNB bank fraud. LOUs misused.", severity: "CRITICAL" },
    { year: 2023, name: "Adani Group Allegations", amount: "N/A", description: "Hindenburg Research report alleges stock manipulation and accounting fraud. Opposition attacks Modi.", severity: "HIGH" },
  ],

  // Constitutional Amendments
  amendments: [
    { number: 1, year: 1951, description: "Added Ninth Schedule, protected land reform laws from judicial review" },
    { number: 7, year: 1956, description: "Reorganized states on linguistic lines, abolished Part B states" },
    { number: 14, year: 1962, description: "Pondicherry merger with India" },
    { number: 24, year: 1971, description: "Parliament's power to amend fundamental rights" },
    { number: 25, year: 1971, description: "Curtailed right to property, Kesavananda Bharati case aftermath" },
    { number: 42, year: 1976, description: "Emergency era, made India 'Socialist Secular', extended Parliament term" },
    { number: 44, year: 1978, description: "Restored original Constitution, removed 42nd Amendment excesses" },
    { number: 52, year: 1985, description: "Anti-defection law, Tenth Schedule added" },
    { number: 61, year: 1988, description: "Voting age reduced from 21 to 18" },
    { number: 73, year: 1992, description: "Panchayati Raj institutions given constitutional status" },
    { number: 74, year: 1992, description: "Municipal bodies given constitutional status" },
    { number: 86, year: 2002, description: "Right to Education made fundamental right, Article 21A" },
    { number: 91, year: 2003, description: "Cabinet size capped at 15% of House strength" },
    { number: 101, year: 2016, description: "GST (Goods and Services Tax) constitutional amendment" },
    { number: 102, year: 2018, description: "National Commission for Backward Classes made constitutional body" },
    { number: 103, year: 2019, description: "10% EWS reservation for economically weaker sections" },
  ],

  // Lok Sabha seat data by party over years (for chart)
  seatHistory: {
    years: [1951, 1957, 1962, 1967, 1971, 1977, 1980, 1984, 1989, 1991, 1996, 1998, 1999, 2004, 2009, 2014, 2019, 2024],
    INC:  [364,  371,  361,  283,  352,   154,  353,  404,  197,  244,  140,  141,  114,  145,  206,  44,   52,   99],
    BJP:  [3,    4,    14,   35,   22,    295,  31,   2,    85,   120,  161,  182,  182,  138,  116,  282,  303,  240],
  },

  // Current Parliament Composition (2024)
  parliament2024: {
    loksabha: [
      { party: "BJP", seats: 240, color: "#ff6600" },
      { party: "INC", seats: 99, color: "#1a6b3c" },
      { party: "SP", seats: 37, color: "#ff0000" },
      { party: "TMC", seats: 29, color: "#00b4d8" },
      { party: "DMK", seats: 22, color: "#000088" },
      { party: "TDP", seats: 16, color: "#ffcc00" },
      { party: "JDU", seats: 12, color: "#00cc00" },
      { party: "SS(UBT)", seats: 9, color: "#ff6600" },
      { party: "Others", seats: 79, color: "#666666" },
    ]
  },

  // State Assembly Elections (Upcoming)
  stateElections: [
    { state: "Delhi", electionDate: "2025-02-05", assemblySeats: 70, rulingParty: "BJP", phase: "Single", region: "North",
      polls: [
        { pollster: "India Today", date: "2025-01-15", bjp: 45, aap: 38, inc: 12, others: 5 },
        { pollster: "ABP News", date: "2025-01-20", bjp: 42, aap: 40, inc: 11, others: 7 },
        { pollster: "Times Now", date: "2025-01-25", bjp: 44, aap: 39, inc: 10, others: 7 }
      ]
    },
    { state: "Bihar", electionDate: "2025-11-06", assemblySeats: 243, rulingParty: "NDA", phase: "Two", region: "East",
      polls: [
        { pollster: "India Today", date: "2025-10-15", nda: 48, mahagathbandhan: 42, others: 10 },
        { pollster: "ABP News", date: "2025-10-20", nda: 46, mahagathbandhan: 44, others: 10 },
        { pollster: "Times Now", date: "2025-10-25", nda: 47, mahagathbandhan: 43, others: 10 }
      ]
    },
    { state: "Assam", electionDate: "2026-04-15", assemblySeats: 126, rulingParty: "BJP", phase: "Single", region: "Northeast",
      polls: [
        { pollster: "India Today", date: "2026-03-15", bjp: 52, inc: 28, others: 20 },
        { pollster: "ABP News", date: "2026-03-20", bjp: 50, inc: 30, others: 20 },
        { pollster: "Times Now", date: "2026-03-25", bjp: 51, inc: 29, others: 20 }
      ]
    },
    { state: "Kerala", electionDate: "2026-04-16", assemblySeats: 140, rulingParty: "CPM", phase: "Single", region: "South",
      polls: [
        { pollster: "India Today", date: "2026-03-15", cpm: 42, inc: 38, bjp: 15, others: 5 },
        { pollster: "ABP News", date: "2026-03-20", cpm: 44, inc: 36, bjp: 14, others: 6 },
        { pollster: "Times Now", date: "2026-03-25", cpm: 43, inc: 37, bjp: 15, others: 5 }
      ]
    },
    { state: "Tamil Nadu", electionDate: "2026-04-27", assemblySeats: 234, rulingParty: "DMK", phase: "Single", region: "South",
      polls: [
        { pollster: "India Today", date: "2026-03-15", dmk: 48, aiadmk: 35, bjp: 12, others: 5 },
        { pollster: "ABP News", date: "2026-03-20", dmk: 46, aiadmk: 37, bjp: 11, others: 6 },
        { pollster: "Times Now", date: "2026-03-25", dmk: 47, aiadmk: 36, bjp: 12, others: 5 }
      ]
    },
    { state: "West Bengal", electionDate: "2026-04-25", assemblySeats: 294, rulingParty: "TMC", phase: "Single", region: "East",
      polls: [
        { pollster: "India Today", date: "2026-03-15", tmc: 45, bjp: 38, inc: 12, others: 5 },
        { pollster: "ABP News", date: "2026-03-20", tmc: 43, bjp: 40, inc: 11, others: 6 },
        { pollster: "Times Now", date: "2026-03-25", tmc: 44, bjp: 39, inc: 11, others: 6 }
      ]
    },
    { state: "Puducherry", electionDate: "2026-05-16", assemblySeats: 33, rulingParty: "BJP", phase: "Single", region: "South",
      polls: [
        { pollster: "India Today", date: "2026-04-15", inc: 42, bjp: 35, others: 23 },
        { pollster: "ABP News", date: "2026-04-20", inc: 44, bjp: 33, others: 23 },
        { pollster: "Times Now", date: "2026-04-25", inc: 43, bjp: 34, others: 23 }
      ]
    },
    { state: "Goa", electionDate: "2027-02-14", assemblySeats: 40, rulingParty: "BJP", phase: "Single", region: "West",
      polls: [
        { pollster: "India Today", date: "2027-01-15", bjp: 48, inc: 35, others: 17 },
        { pollster: "ABP News", date: "2027-01-20", bjp: 46, inc: 37, others: 17 },
        { pollster: "Times Now", date: "2027-01-25", bjp: 47, inc: 36, others: 17 }
      ]
    },
    { state: "Manipur", electionDate: "2027-02-28", assemblySeats: 60, rulingParty: "BJP", phase: "Single", region: "Northeast",
      polls: [
        { pollster: "India Today", date: "2027-01-15", bjp: 42, inc: 38, others: 20 },
        { pollster: "ABP News", date: "2027-01-20", bjp: 44, inc: 36, others: 20 },
        { pollster: "Times Now", date: "2027-01-25", bjp: 43, inc: 37, others: 20 }
      ]
    },
    { state: "Punjab", electionDate: "2027-02-20", assemblySeats: 117, rulingParty: "AAP", phase: "Single", region: "North",
      polls: [
        { pollster: "India Today", date: "2027-01-15", aap: 45, inc: 32, bjp: 18, others: 5 },
        { pollster: "ABP News", date: "2027-01-20", aap: 43, inc: 34, bjp: 17, others: 6 },
        { pollster: "Times Now", date: "2027-01-25", aap: 44, inc: 33, bjp: 18, others: 5 }
      ]
    },
    { state: "Uttar Pradesh", electionDate: "2027-04-10", assemblySeats: 403, rulingParty: "BJP", phase: "Multi", region: "North",
      polls: [
        { pollster: "India Today", date: "2027-03-15", bjp: 48, sp: 28, inc: 18, others: 6 },
        { pollster: "ABP News", date: "2027-03-20", bjp: 46, sp: 30, inc: 17, others: 7 },
        { pollster: "Times Now", date: "2027-03-25", bjp: 47, sp: 29, inc: 18, others: 6 }
      ]
    },
    { state: "Gujarat", electionDate: "2027-11-13", assemblySeats: 182, rulingParty: "BJP", phase: "Single", region: "West",
      polls: [
        { pollster: "India Today", date: "2027-10-15", bjp: 55, inc: 32, others: 13 },
        { pollster: "ABP News", date: "2027-10-20", bjp: 53, inc: 34, others: 13 },
        { pollster: "Times Now", date: "2027-10-25", bjp: 54, inc: 33, others: 13 }
      ]
    },
    { state: "Himachal Pradesh", electionDate: "2027-11-12", assemblySeats: 68, rulingParty: "INC", phase: "Single", region: "North",
      polls: [
        { pollster: "India Today", date: "2027-10-15", inc: 48, bjp: 42, others: 10 },
        { pollster: "ABP News", date: "2027-10-20", inc: 46, bjp: 44, others: 10 },
        { pollster: "Times Now", date: "2027-10-25", inc: 47, bjp: 43, others: 10 }
      ]
    },
    { state: "Chhattisgarh", electionDate: "2028-11-17", assemblySeats: 90, rulingParty: "INC", phase: "Single", region: "Central",
      polls: [
        { pollster: "India Today", date: "2028-10-15", inc: 45, bjp: 40, others: 15 },
        { pollster: "ABP News", date: "2028-10-20", inc: 43, bjp: 42, others: 15 },
        { pollster: "Times Now", date: "2028-10-25", inc: 44, bjp: 41, others: 15 }
      ]
    },
    { state: "Madhya Pradesh", electionDate: "2028-11-17", assemblySeats: 230, rulingParty: "INC", phase: "Single", region: "Central",
      polls: [
        { pollster: "India Today", date: "2028-10-15", inc: 48, bjp: 38, others: 14 },
        { pollster: "ABP News", date: "2028-10-20", inc: 46, bjp: 40, others: 14 },
        { pollster: "Times Now", date: "2028-10-25", inc: 47, bjp: 39, others: 14 }
      ]
    },
    { state: "Rajasthan", electionDate: "2028-11-25", assemblySeats: 200, rulingParty: "INC", phase: "Single", region: "West",
      polls: [
        { pollster: "India Today", date: "2028-10-15", inc: 50, bjp: 35, others: 15 },
        { pollster: "ABP News", date: "2028-10-20", inc: 48, bjp: 37, others: 15 },
        { pollster: "Times Now", date: "2028-10-25", inc: 49, bjp: 36, others: 15 }
      ]
    },
    { state: "Telangana", electionDate: "2028-11-30", assemblySeats: 119, rulingParty: "INC", phase: "Single", region: "South",
      polls: [
        { pollster: "India Today", date: "2028-10-15", inc: 52, bjp: 28, others: 20 },
        { pollster: "ABP News", date: "2028-10-20", inc: 50, bjp: 30, others: 20 },
        { pollster: "Times Now", date: "2028-10-25", inc: 51, bjp: 29, others: 20 }
      ]
    },
    { state: "Meghalaya", electionDate: "2028-02-27", assemblySeats: 60, rulingParty: "NPP", phase: "Single", region: "Northeast",
      polls: [
        { pollster: "India Today", date: "2028-01-15", npp: 38, inc: 35, others: 27 },
        { pollster: "ABP News", date: "2028-01-20", npp: 40, inc: 33, others: 27 },
        { pollster: "Times Now", date: "2028-01-25", npp: 39, inc: 34, others: 27 }
      ]
    },
    { state: "Nagaland", electionDate: "2028-02-16", assemblySeats: 60, rulingParty: "NDPP", phase: "Single", region: "Northeast",
      polls: [
        { pollster: "India Today", date: "2028-01-15", ndpp: 42, npp: 35, others: 23 },
        { pollster: "ABP News", date: "2028-01-20", ndpp: 44, npp: 33, others: 23 },
        { pollster: "Times Now", date: "2028-01-25", ndpp: 43, npp: 34, others: 23 }
      ]
    },
    { state: "Tripura", electionDate: "2028-02-16", assemblySeats: 60, rulingParty: "BJP", phase: "Single", region: "Northeast",
      polls: [
        { pollster: "India Today", date: "2028-01-15", bjp: 48, inc: 35, others: 17 },
        { pollster: "ABP News", date: "2028-01-20", bjp: 46, inc: 37, others: 17 },
        { pollster: "Times Now", date: "2028-01-25", bjp: 47, inc: 36, others: 17 }
      ]
    },
    { state: "Karnataka", electionDate: "2028-05-10", assemblySeats: 224, rulingParty: "INC", phase: "Single", region: "South",
      polls: [
        { pollster: "India Today", date: "2028-04-15", inc: 45, bjp: 38, others: 17 },
        { pollster: "ABP News", date: "2028-04-20", inc: 43, bjp: 40, others: 17 },
        { pollster: "Times Now", date: "2028-04-25", inc: 44, bjp: 39, others: 17 }
      ]
    },
    { state: "Mizoram", electionDate: "2028-11-07", assemblySeats: 40, rulingParty: "ZPM", phase: "Single", region: "Northeast",
      polls: [
        { pollster: "India Today", date: "2028-10-15", zpm: 42, inc: 35, others: 23 },
        { pollster: "ABP News", date: "2028-10-20", zpm: 44, inc: 33, others: 23 },
        { pollster: "Times Now", date: "2028-10-25", zpm: 43, inc: 34, others: 23 }
      ]
    },
    { state: "Andhra Pradesh", electionDate: "2029-05-13", assemblySeats: 175, rulingParty: "TDP", phase: "Single", region: "South",
      polls: [
        { pollster: "India Today", date: "2029-04-15", tdp: 48, ysrcp: 35, bjp: 12, others: 5 },
        { pollster: "ABP News", date: "2029-04-20", tdp: 46, ysrcp: 37, bjp: 11, others: 6 },
        { pollster: "Times Now", date: "2029-04-25", tdp: 47, ysrcp: 36, bjp: 12, others: 5 }
      ]
    },
    { state: "Arunachal Pradesh", electionDate: "2029-05-13", assemblySeats: 60, rulingParty: "BJP", phase: "Single", region: "Northeast",
      polls: [
        { pollster: "India Today", date: "2029-04-15", bjp: 52, inc: 28, others: 20 },
        { pollster: "ABP News", date: "2029-04-20", bjp: 50, inc: 30, others: 20 },
        { pollster: "Times Now", date: "2029-04-25", bjp: 51, inc: 29, others: 20 }
      ]
    },
    { state: "Odisha", electionDate: "2029-05-25", assemblySeats: 147, rulingParty: "BJP", phase: "Single", region: "East",
      polls: [
        { pollster: "India Today", date: "2029-04-15", bjp: 45, bjd: 38, inc: 12, others: 5 },
        { pollster: "ABP News", date: "2029-04-20", bjp: 43, bjd: 40, inc: 11, others: 6 },
        { pollster: "Times Now", date: "2029-04-25", bjp: 44, bjd: 39, inc: 11, others: 6 }
      ]
    },
    { state: "Sikkim", electionDate: "2029-05-13", assemblySeats: 32, rulingParty: "SKM", phase: "Single", region: "Northeast",
      polls: [
        { pollster: "India Today", date: "2029-04-15", skm: 48, inc: 35, others: 17 },
        { pollster: "ABP News", date: "2029-04-20", skm: 46, inc: 37, others: 17 },
        { pollster: "Times Now", date: "2029-04-25", skm: 47, inc: 36, others: 17 }
      ]
    },
    { state: "Jammu and Kashmir", electionDate: "2029-09-25", assemblySeats: 90, rulingParty: "NC", phase: "Single", region: "North",
      polls: [
        { pollster: "India Today", date: "2029-08-15", nc: 42, pdp: 35, bjp: 18, others: 5 },
        { pollster: "ABP News", date: "2029-08-20", nc: 44, pdp: 33, bjp: 17, others: 6 },
        { pollster: "Times Now", date: "2029-08-25", nc: 43, pdp: 34, bjp: 18, others: 5 }
      ]
    },
    { state: "Haryana", electionDate: "2029-10-05", assemblySeats: 90, rulingParty: "BJP", phase: "Single", region: "North",
      polls: [
        { pollster: "India Today", date: "2029-09-15", bjp: 48, inc: 35, others: 17 },
        { pollster: "ABP News", date: "2029-09-20", bjp: 46, inc: 37, others: 17 },
        { pollster: "Times Now", date: "2029-09-25", bjp: 47, inc: 36, others: 17 }
      ]
    },
    { state: "Maharashtra", electionDate: "2029-10-17", assemblySeats: 288, rulingParty: "SS", phase: "Single", region: "West",
      polls: [
        { pollster: "India Today", date: "2029-09-15", ss: 38, bjp: 28, ncp: 18, inc: 12, others: 4 },
        { pollster: "ABP News", date: "2029-09-20", ss: 36, bjp: 30, ncp: 20, inc: 10, others: 4 },
        { pollster: "Times Now", date: "2029-09-25", ss: 37, bjp: 29, ncp: 19, inc: 11, others: 4 }
      ]
    },
    { state: "Jharkhand", electionDate: "2029-11-05", assemblySeats: 81, rulingParty: "JMM", phase: "Single", region: "East",
      polls: [
        { pollster: "India Today", date: "2029-10-15", jmm: 42, bjp: 35, inc: 18, others: 5 },
        { pollster: "ABP News", date: "2029-10-20", jmm: 44, bjp: 33, inc: 17, others: 6 },
        { pollster: "Times Now", date: "2029-10-25", jmm: 43, bjp: 34, inc: 18, others: 5 }
      ]
    }
  ],

  // Current News Ticker (static data)
  tickerItems: [
    "BJP wins 240 seats in 2024 Lok Sabha | NDA coalition forms govt | Modi sworn in for 3rd term",
    "India's GDP growth at 7.2% in FY2024 | Fastest growing major economy",
    "Ram Mandir consecrated in Ayodhya on Jan 22, 2024 | Lakhs attend",
    "Article 370 revocation upheld by Supreme Court | Historic ruling",
    "India elected non-permanent member of UN Security Council 2028-2029",
    "Delhi elections 2025: BJP wins with 48 seats | AAP reduced to 22",
    "India hosts G20 Summit 2023 | 'Vasudhaiva Kutumbakam' theme",
    "Chandrayaan-3 lands on Moon's south pole | India 4th nation to land on Moon",
    "India surpasses China as world's most populous nation | 1.428 billion",
    "Lok Sabha passes Women's Reservation Bill 2023 | 33% seats for women",
  ],

  // Historical Economic Data (Annual)
  economicData: [
    { year: 1951, gdpGrowth: 3.7, inflation: 3.1, unemployment: 2.0 },
    { year: 1952, gdpGrowth: 4.0, inflation: 1.9, unemployment: 2.1 },
    { year: 1953, gdpGrowth: 3.1, inflation: 1.8, unemployment: 2.0 },
    { year: 1954, gdpGrowth: 4.2, inflation: 1.7, unemployment: 2.1 },
    { year: 1955, gdpGrowth: 4.4, inflation: 0.8, unemployment: 2.0 },
    { year: 1956, gdpGrowth: 2.8, inflation: -1.2, unemployment: 2.2 },
    { year: 1957, gdpGrowth: -1.2, inflation: 2.5, unemployment: 2.5 },
    { year: 1958, gdpGrowth: 7.6, inflation: -0.6, unemployment: 2.3 },
    { year: 1959, gdpGrowth: 3.7, inflation: 6.6, unemployment: 2.4 },
    { year: 1960, gdpGrowth: 7.7, inflation: 1.8, unemployment: 2.3 },
    { year: 1961, gdpGrowth: 3.1, inflation: 3.5, unemployment: 2.5 },
    { year: 1962, gdpGrowth: 3.1, inflation: 3.6, unemployment: 2.7 },
    { year: 1963, gdpGrowth: 5.1, inflation: 2.9, unemployment: 2.6 },
    { year: 1964, gdpGrowth: 7.4, inflation: 13.4, unemployment: 2.8 },
    { year: 1965, gdpGrowth: -2.0, inflation: -2.2, unemployment: 3.0 },
    { year: 1966, gdpGrowth: -0.1, inflation: 10.9, unemployment: 3.2 },
    { year: 1967, gdpGrowth: 7.8, inflation: 12.9, unemployment: 3.1 },
    { year: 1968, gdpGrowth: 3.4, inflation: 3.2, unemployment: 3.0 },
    { year: 1969, gdpGrowth: 6.5, inflation: 1.1, unemployment: 2.9 },
    { year: 1970, gdpGrowth: 5.2, inflation: 5.5, unemployment: 2.8 },
    { year: 1971, gdpGrowth: 1.6, inflation: 3.1, unemployment: 2.9 },
    { year: 1972, gdpGrowth: -0.5, inflation: 6.4, unemployment: 3.1 },
    { year: 1973, gdpGrowth: 3.3, inflation: 16.9, unemployment: 3.0 },
    { year: 1974, gdpGrowth: 1.2, inflation: 28.6, unemployment: 3.2 },
    { year: 1975, gdpGrowth: 9.1, inflation: -7.6, unemployment: 3.4 },
    { year: 1976, gdpGrowth: 1.7, inflation: -1.1, unemployment: 3.3 },
    { year: 1977, gdpGrowth: 7.3, inflation: 8.3, unemployment: 3.2 },
    { year: 1978, gdpGrowth: 5.7, inflation: 2.5, unemployment: 3.1 },
    { year: 1979, gdpGrowth: -5.2, inflation: 6.3, unemployment: 3.4 },
    { year: 1980, gdpGrowth: 6.7, inflation: 11.3, unemployment: 3.3 },
    { year: 1981, gdpGrowth: 6.0, inflation: 13.1, unemployment: 3.2 },
    { year: 1982, gdpGrowth: 3.5, inflation: 7.9, unemployment: 3.3 },
    { year: 1983, gdpGrowth: 7.3, inflation: 11.9, unemployment: 3.2 },
    { year: 1984, gdpGrowth: 3.8, inflation: 8.3, unemployment: 3.1 },
    { year: 1985, gdpGrowth: 5.3, inflation: 5.6, unemployment: 3.0 },
    { year: 1986, gdpGrowth: 4.8, inflation: 8.7, unemployment: 2.9 },
    { year: 1987, gdpGrowth: 3.8, inflation: 8.8, unemployment: 2.8 },
    { year: 1988, gdpGrowth: 9.6, inflation: 9.4, unemployment: 2.7 },
    { year: 1989, gdpGrowth: 5.9, inflation: 7.1, unemployment: 2.8 },
    { year: 1990, gdpGrowth: 5.5, inflation: 8.9, unemployment: 2.9 },
    { year: 1991, gdpGrowth: 1.1, inflation: 13.9, unemployment: 3.1 },
    { year: 1992, gdpGrowth: 5.5, inflation: 11.8, unemployment: 3.0 },
    { year: 1993, gdpGrowth: 4.8, inflation: 6.3, unemployment: 2.9 },
    { year: 1994, gdpGrowth: 6.7, inflation: 10.2, unemployment: 2.8 },
    { year: 1995, gdpGrowth: 7.6, inflation: 10.2, unemployment: 2.7 },
    { year: 1996, gdpGrowth: 7.5, inflation: 8.9, unemployment: 2.8 },
    { year: 1997, gdpGrowth: 4.0, inflation: 6.8, unemployment: 2.9 },
    { year: 1998, gdpGrowth: 6.2, inflation: 13.2, unemployment: 3.0 },
    { year: 1999, gdpGrowth: 8.8, inflation: 4.7, unemployment: 2.9 },
    { year: 2000, gdpGrowth: 3.8, inflation: 4.0, unemployment: 2.8 },
    { year: 2001, gdpGrowth: 4.8, inflation: 3.7, unemployment: 2.9 },
    { year: 2002, gdpGrowth: 3.8, inflation: 4.3, unemployment: 3.0 },
    { year: 2003, gdpGrowth: 7.9, inflation: 3.8, unemployment: 2.9 },
    { year: 2004, gdpGrowth: 7.9, inflation: 3.8, unemployment: 2.8 },
    { year: 2005, gdpGrowth: 7.4, inflation: 4.2, unemployment: 2.7 },
    { year: 2006, gdpGrowth: 8.1, inflation: 5.8, unemployment: 2.6 },
    { year: 2007, gdpGrowth: 7.7, inflation: 6.4, unemployment: 2.5 },
    { year: 2008, gdpGrowth: 3.1, inflation: 8.3, unemployment: 2.8 },
    { year: 2009, gdpGrowth: 7.9, inflation: 10.9, unemployment: 3.1 },
    { year: 2010, gdpGrowth: 8.5, inflation: 11.99, unemployment: 2.9 },
    { year: 2011, gdpGrowth: 5.2, inflation: 8.9, unemployment: 3.0 },
    { year: 2012, gdpGrowth: 5.5, inflation: 9.3, unemployment: 3.1 },
    { year: 2013, gdpGrowth: 6.4, inflation: 10.0, unemployment: 3.2 },
    { year: 2014, gdpGrowth: 7.4, inflation: 6.0, unemployment: 3.3 },
    { year: 2015, gdpGrowth: 8.0, inflation: 4.9, unemployment: 3.2 },
    { year: 2016, gdpGrowth: 8.3, inflation: 4.5, unemployment: 3.1 },
    { year: 2017, gdpGrowth: 7.0, inflation: 3.3, unemployment: 3.0 },
    { year: 2018, gdpGrowth: 6.1, inflation: 3.9, unemployment: 2.9 },
    { year: 2019, gdpGrowth: 4.0, inflation: 3.7, unemployment: 3.0 },
    { year: 2020, gdpGrowth: -5.8, inflation: 6.6, unemployment: 4.8 },
    { year: 2021, gdpGrowth: 8.7, inflation: 5.1, unemployment: 3.9 },
    { year: 2022, gdpGrowth: 7.0, inflation: 6.7, unemployment: 3.8 },
    { year: 2023, gdpGrowth: 7.6, inflation: 5.4, unemployment: 7.2 },
    { year: 2024, gdpGrowth: 6.8, inflation: 4.2, unemployment: 7.5 }
  ]

};
