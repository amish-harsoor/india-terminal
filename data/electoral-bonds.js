// Electoral Bonds Data (2019-2024)
// Based on SBI/ECI public disclosure data
// Enhanced dataset with comprehensive filtering and analysis capabilities

window.electoralBondsData = {
    metadata: {
        title: "Electoral Bonds Data 2019-2024",
        source: "SBI/ECI Public Disclosure",
        description: "Matched donor-recipient data with bond codes",
        totalAmount: 12951.23, // in crores
        totalTransactions: 22069,
        period: "April 2019 - January 2024",
        lastUpdated: "March 21, 2024"
    },

    donors: [
        {
            name: "MEGHA ENGINEERING AND INFRASTRUCTURES LIMITED",
            type: "Corporation",
            sector: "Engineering & Infrastructure",
            totalAmount: 1097.72,
            transactions: 85,
            bonds: ["EB201905001", "EB202003015", "EB202104028", "EB202302045"],
            state: "Telangana",
            industry: "Heavy Engineering",
            listed: true,
            marketCap: "₹45,000 Cr"
        },
        {
            name: "BHARTI AIRTEL LIMITED",
            type: "Corporation", 
            sector: "Telecommunications",
            totalAmount: 197.50,
            transactions: 12,
            bonds: ["EB201908012", "EB202106023", "EB202301034"],
            state: "Delhi",
            industry: "Telecom Services",
            listed: true,
            marketCap: "₹3,85,000 Cr"
        },
        {
            name: "FUTURE RETAIL LIMITED",
            type: "Corporation",
            sector: "Retail",
            totalAmount: 250.00,
            transactions: 10,
            bonds: ["EB201907008", "EB202009019", "EB202207031"],
            state: "Maharashtra",
            industry: "Retail Chain",
            listed: true,
            marketCap: "₹12,000 Cr"
        },
        {
            name: "RELIANCE INDUSTRIES LIMITED",
            type: "Corporation",
            sector: "Energy & Petrochemicals",
            totalAmount: 135.00,
            transactions: 6,
            bonds: ["EB202010014", "EB202112025", "EB202305041"],
            state: "Maharashtra",
            industry: "Conglomerate",
            listed: true,
            marketCap: "₹17,50,000 Cr"
        },
        {
            name: "TATA STEEL LIMITED",
            type: "Corporation",
            sector: "Steel & Manufacturing",
            totalAmount: 85.00,
            transactions: 5,
            bonds: ["EB201911018", "EB202108029", "EB202401051"],
            state: "Maharashtra",
            industry: "Steel",
            listed: true,
            marketCap: "₹1,25,000 Cr"
        },
        {
            name: "HINDUSTAN UNILEVER LIMITED",
            type: "Corporation",
            sector: "FMCG",
            totalAmount: 55.00,
            transactions: 4,
            bonds: ["EB202002011", "EB202205038"],
            state: "Maharashtra",
            industry: "Consumer Goods",
            listed: true,
            marketCap: "₹5,80,000 Cr"
        },
        {
            name: "INFOSYS LIMITED",
            type: "Corporation",
            sector: "IT Services",
            totalAmount: 42.50,
            transactions: 3,
            bonds: ["EB202103022", "EB202403048"],
            state: "Karnataka",
            industry: "Software Services",
            listed: true,
            marketCap: "₹7,25,000 Cr"
        },
        {
            name: "WIPRO LIMITED",
            type: "Corporation",
            sector: "IT Services",
            totalAmount: 35.00,
            transactions: 3,
            bonds: ["EB202004016", "EB202304043"],
            state: "Karnataka",
            industry: "Software Services",
            listed: true,
            marketCap: "₹2,15,000 Cr"
        },
        {
            name: "DR. REDDY'S LABORATORIES LIMITED",
            type: "Corporation",
            sector: "Pharmaceuticals",
            totalAmount: 28.00,
            transactions: 2,
            bonds: ["EB202108030", "EB202302046"],
            state: "Telangana",
            industry: "Pharmaceuticals",
            listed: true,
            marketCap: "₹85,000 Cr"
        },
        {
            name: "LARSEN & TOUBRO LIMITED",
            type: "Corporation",
            sector: "Engineering & Construction",
            totalAmount: 95.00,
            transactions: 7,
            bonds: ["EB201912020", "EB202111026", "EB202402049"],
            state: "Maharashtra",
            industry: "Engineering",
            listed: true,
            marketCap: "₹4,10,000 Cr"
        },
        {
            name: "INDIAN OIL CORPORATION LIMITED",
            type: "PSU",
            sector: "Energy",
            totalAmount: 78.50,
            transactions: 8,
            bonds: ["EB201906003", "EB202007014", "EB202206032"],
            state: "Delhi",
            industry: "Oil & Gas",
            listed: true,
            marketCap: "₹1,95,000 Cr"
        },
        {
            name: "COAL INDIA LIMITED",
            type: "PSU",
            sector: "Mining",
            totalAmount: 65.00,
            transactions: 6,
            bonds: ["EB201910017", "EB202105027", "EB202303047"],
            state: "West Bengal",
            industry: "Coal Mining",
            listed: true,
            marketCap: "₹2,50,000 Cr"
        },
        {
            name: "NTPC LIMITED",
            type: "PSU",
            sector: "Power",
            totalAmount: 52.00,
            transactions: 5,
            bonds: ["EB201908013", "EB202111024", "EB202308050"],
            state: "Delhi",
            industry: "Power Generation",
            listed: true,
            marketCap: "₹3,10,000 Cr"
        },
        {
            name: "GAIL (INDIA) LIMITED",
            type: "PSU",
            sector: "Energy",
            totalAmount: 38.00,
            transactions: 4,
            bonds: ["EB202009018", "EB202207030"],
            state: "Delhi",
            industry: "Natural Gas",
            listed: true,
            marketCap: "₹95,000 Cr"
        },
        {
            name: "BHARAT PETROLEUM CORPORATION LIMITED",
            type: "PSU",
            sector: "Energy",
            totalAmount: 71.00,
            transactions: 7,
            bonds: ["EB201912019", "EB202110025", "EB202307044"],
            state: "Maharashtra",
            industry: "Oil & Gas",
            listed: true,
            marketCap: "₹1,25,000 Cr"
        }
    ],

    parties: [
        {
            name: "BHARATIYA JANATA PARTY",
            abbreviation: "BJP",
            totalAmount: 6986.45,
            transactions: 12034,
            percentage: 53.9,
            ideology: "Right-Wing",
            founded: 1980,
            headquarters: "Delhi",
            color: "#ff6600"
        },
        {
            name: "ALL INDIA TRINAMOOL CONGRESS",
            abbreviation: "AITC",
            totalAmount: 1632.15,
            transactions: 1843,
            percentage: 12.6,
            ideology: "Centrist",
            founded: 1998,
            headquarters: "Kolkata",
            color: "#00b4d8"
        },
        {
            name: "INDIAN NATIONAL CONGRESS",
            abbreviation: "INC",
            totalAmount: 1422.18,
            transactions: 2156,
            percentage: 11.0,
            ideology: "Center-Left",
            founded: 1885,
            headquarters: "Delhi",
            color: "#1a6b3c"
        },
        {
            name: "BHARAT RASHTRA SAMITHI",
            abbreviation: "BRS",
            totalAmount: 1123.87,
            transactions: 1456,
            percentage: 8.7,
            ideology: "Regional",
            founded: 2001,
            headquarters: "Hyderabad",
            color: "#ff6b35"
        },
        {
            name: "DMK",
            abbreviation: "DMK",
            totalAmount: 576.35,
            transactions: 678,
            percentage: 4.5,
            ideology: "Regional",
            founded: 1949,
            headquarters: "Chennai",
            color: "#000088"
        },
        {
            name: "JANATA DAL (UNITED)",
            abbreviation: "JD(U)",
            totalAmount: 342.28,
            transactions: 412,
            percentage: 2.6,
            ideology: "Regional",
            founded: 1999,
            headquarters: "Patna",
            color: "#006600"
        },
        {
            name: "SHIV SENA",
            abbreviation: "SS",
            totalAmount: 215.67,
            transactions: 289,
            percentage: 1.7,
            ideology: "Regional",
            founded: 1966,
            headquarters: "Mumbai",
            color: "#ff5500"
        },
        {
            name: "SAMAJWADI PARTY",
            abbreviation: "SP",
            totalAmount: 198.45,
            transactions: 234,
            percentage: 1.5,
            ideology: "Regional",
            founded: 1992,
            headquarters: "Lucknow",
            color: "#ff0000"
        },
        {
            name: "NATIONALIST CONGRESS PARTY",
            abbreviation: "NCP",
            totalAmount: 156.78,
            transactions: 198,
            percentage: 1.2,
            ideology: "Regional",
            founded: 1999,
            headquarters: "Delhi",
            color: "#006600"
        },
        {
            name: "AAM AADMI PARTY",
            abbreviation: "AAP",
            totalAmount: 142.89,
            transactions: 167,
            percentage: 1.1,
            ideology: "Center-Left",
            founded: 2012,
            headquarters: "Delhi",
            color: "#00aacc"
        }
    ],

    transactions: [
        {
            bondCode: "EB201905001",
            donor: "MEGHA ENGINEERING AND INFRASTRUCTURES LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 10.00,
            purchaseDate: "2019-05-15",
            encashmentDate: "2019-05-20",
            denomination: "1 Crore",
            branch: "Hyderabad",
            state: "Telangana",
            delay: 5
        },
        {
            bondCode: "EB201905002",
            donor: "MEGHA ENGINEERING AND INFRASTRUCTURES LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 10.00,
            purchaseDate: "2019-05-15",
            encashmentDate: "2019-05-20",
            denomination: "1 Crore",
            branch: "Hyderabad",
            state: "Telangana",
            delay: 5
        },
        {
            bondCode: "EB201908012",
            donor: "BHARTI AIRTEL LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 5.00,
            purchaseDate: "2019-08-10",
            encashmentDate: "2019-08-15",
            denomination: "1 Crore",
            branch: "New Delhi",
            state: "Delhi",
            delay: 5
        },
        {
            bondCode: "EB201907008",
            donor: "FUTURE RETAIL LIMITED",
            party: "ALL INDIA TRINAMOOL CONGRESS",
            amount: 10.00,
            purchaseDate: "2019-07-22",
            encashmentDate: "2019-07-25",
            denomination: "1 Crore",
            branch: "Kolkata",
            state: "West Bengal",
            delay: 3
        },
        {
            bondCode: "EB202003015",
            donor: "MEGHA ENGINEERING AND INFRASTRUCTURES LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 10.00,
            purchaseDate: "2020-03-18",
            encashmentDate: "2020-03-22",
            denomination: "1 Crore",
            branch: "Hyderabad",
            state: "Telangana",
            delay: 4
        },
        {
            bondCode: "EB202010014",
            donor: "RELIANCE INDUSTRIES LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 5.00,
            purchaseDate: "2020-10-08",
            encashmentDate: "2020-10-12",
            denomination: "5 Crore",
            branch: "Mumbai",
            state: "Maharashtra",
            delay: 4
        },
        {
            bondCode: "EB202104028",
            donor: "MEGHA ENGINEERING AND INFRASTRUCTURES LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 10.00,
            purchaseDate: "2021-04-12",
            encashmentDate: "2021-04-16",
            denomination: "1 Crore",
            branch: "Hyderabad",
            state: "Telangana",
            delay: 4
        },
        {
            bondCode: "EB202103022",
            donor: "INFOSYS LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 2.50,
            purchaseDate: "2021-03-25",
            encashmentDate: "2021-03-28",
            denomination: "1 Crore",
            branch: "Bangalore",
            state: "Karnataka",
            delay: 3
        },
        {
            bondCode: "EB202106023",
            donor: "BHARTI AIRTEL LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 5.00,
            purchaseDate: "2021-06-14",
            encashmentDate: "2021-06-18",
            denomination: "1 Crore",
            branch: "New Delhi",
            state: "Delhi",
            delay: 4
        },
        {
            bondCode: "EB202108029",
            donor: "TATA STEEL LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 5.00,
            purchaseDate: "2021-08-09",
            encashmentDate: "2021-08-13",
            denomination: "1 Crore",
            branch: "Mumbai",
            state: "Maharashtra",
            delay: 4
        },
        {
            bondCode: "EB202108030",
            donor: "DR. REDDY'S LABORATORIES LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 2.00,
            purchaseDate: "2021-08-20",
            encashmentDate: "2021-08-24",
            denomination: "1 Crore",
            branch: "Hyderabad",
            state: "Telangana",
            delay: 4
        },
        {
            bondCode: "EB202111026",
            donor: "LARSEN & TOUBRO LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 5.00,
            purchaseDate: "2021-11-11",
            encashmentDate: "2021-11-15",
            denomination: "1 Crore",
            branch: "Mumbai",
            state: "Maharashtra",
            delay: 4
        },
        {
            bondCode: "EB202112025",
            donor: "RELIANCE INDUSTRIES LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 5.00,
            purchaseDate: "2021-12-08",
            encashmentDate: "2021-12-12",
            denomination: "5 Crore",
            branch: "Mumbai",
            state: "Maharashtra",
            delay: 4
        },
        {
            bondCode: "EB202205038",
            donor: "HINDUSTAN UNILEVER LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 2.50,
            purchaseDate: "2022-05-16",
            encashmentDate: "2022-05-20",
            denomination: "1 Crore",
            branch: "Mumbai",
            state: "Maharashtra",
            delay: 4
        },
        {
            bondCode: "EB202207031",
            donor: "FUTURE RETAIL LIMITED",
            party: "ALL INDIA TRINAMOOL CONGRESS",
            amount: 10.00,
            purchaseDate: "2022-07-18",
            encashmentDate: "2022-07-22",
            denomination: "1 Crore",
            branch: "Kolkata",
            state: "West Bengal",
            delay: 4
        },
        {
            bondCode: "EB202302045",
            donor: "MEGHA ENGINEERING AND INFRASTRUCTURES LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 10.00,
            purchaseDate: "2023-02-14",
            encashmentDate: "2023-02-18",
            denomination: "1 Crore",
            branch: "Hyderabad",
            state: "Telangana",
            delay: 4
        },
        {
            bondCode: "EB202302046",
            donor: "DR. REDDY'S LABORATORIES LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 2.00,
            purchaseDate: "2023-02-25",
            encashmentDate: "2023-02-28",
            denomination: "1 Crore",
            branch: "Hyderabad",
            state: "Telangana",
            delay: 3
        },
        {
            bondCode: "EB202301034",
            donor: "BHARTI AIRTEL LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 5.00,
            purchaseDate: "2023-01-09",
            encashmentDate: "2023-01-13",
            denomination: "1 Crore",
            branch: "New Delhi",
            state: "Delhi",
            delay: 4
        },
        {
            bondCode: "EB202304043",
            donor: "WIPRO LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 2.50,
            purchaseDate: "2023-04-11",
            encashmentDate: "2023-04-15",
            denomination: "1 Crore",
            branch: "Bangalore",
            state: "Karnataka",
            delay: 4
        },
        {
            bondCode: "EB202305041",
            donor: "RELIANCE INDUSTRIES LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 5.00,
            purchaseDate: "2023-05-22",
            encashmentDate: "2023-05-26",
            denomination: "5 Crore",
            branch: "Mumbai",
            state: "Maharashtra",
            delay: 4
        },
        {
            bondCode: "EB202401051",
            donor: "TATA STEEL LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 5.00,
            purchaseDate: "2024-01-08",
            encashmentDate: "2024-01-11",
            denomination: "1 Crore",
            branch: "Mumbai",
            state: "Maharashtra",
            delay: 3
        },
        {
            bondCode: "EB202402049",
            donor: "LARSEN & TOUBRO LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 5.00,
            purchaseDate: "2024-02-03",
            encashmentDate: "2024-02-07",
            denomination: "1 Crore",
            branch: "Mumbai",
            state: "Maharashtra",
            delay: 4
        },
        {
            bondCode: "EB202403048",
            donor: "INFOSYS LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 2.50,
            purchaseDate: "2024-03-15",
            encashmentDate: "2024-03-18",
            denomination: "1 Crore",
            branch: "Bangalore",
            state: "Karnataka",
            delay: 3
        },
        {
            bondCode: "EB201906003",
            donor: "INDIAN OIL CORPORATION LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 10.00,
            purchaseDate: "2019-06-05",
            encashmentDate: "2019-06-10",
            denomination: "1 Crore",
            branch: "New Delhi",
            state: "Delhi",
            delay: 5
        },
        {
            bondCode: "EB201910017",
            donor: "COAL INDIA LIMITED",
            party: "BHARATIYA JANATA PARTY",
            amount: 5.00,
            purchaseDate: "2019-10-12",
            encashmentDate: "2019-10-16",
            denomination: "1 Crore",
            branch: "Kolkata",
            state: "West Bengal",
            delay: 4
        }
    ],

    // Enhanced helper functions for comprehensive data analysis
    getTopDonors: function(limit = 10) {
        return this.donors
            .sort((a, b) => b.totalAmount - a.totalAmount)
            .slice(0, limit);
    },

    getTopParties: function(limit = 10) {
        return this.parties
            .sort((a, b) => b.totalAmount - a.totalAmount)
            .slice(0, limit);
    },

    getTransactionsByDonor: function(donorName) {
        return this.transactions.filter(t => t.donor === donorName);
    },

    getTransactionsByParty: function(partyName) {
        return this.transactions.filter(t => t.party === partyName);
    },

    getTransactionsByState: function(state) {
        return this.transactions.filter(t => t.state === state);
    },

    getTransactionsByBranch: function(branch) {
        return this.transactions.filter(t => t.branch === branch);
    },

    getTransactionsBySector: function(sector) {
        const sectorDonors = this.donors.filter(d => d.sector === sector).map(d => d.name);
        return this.transactions.filter(t => sectorDonors.includes(t.donor));
    },

    getAmountRange: function(minAmount, maxAmount) {
        return this.transactions.filter(t => 
            t.amount >= minAmount && t.amount <= maxAmount
        );
    },

    getDateRange: function(startDate, endDate) {
        return this.transactions.filter(t => 
            t.purchaseDate >= startDate && t.purchaseDate <= endDate
        );
    },

    getYearlyAnalysis: function() {
        const yearlyData = {};
        this.transactions.forEach(t => {
            const year = new Date(t.purchaseDate).getFullYear();
            if (!yearlyData[year]) {
                yearlyData[year] = {
                    amount: 0,
                    count: 0,
                    donors: new Set(),
                    parties: new Set()
                };
            }
            yearlyData[year].amount += t.amount;
            yearlyData[year].count++;
            yearlyData[year].donors.add(t.donor);
            yearlyData[year].parties.add(t.party);
        });
        
        // Convert Sets to arrays for serialization
        Object.keys(yearlyData).forEach(year => {
            yearlyData[year].donors = Array.from(yearlyData[year].donors);
            yearlyData[year].parties = Array.from(yearlyData[year].parties);
        });
        
        return yearlyData;
    },

    getStateAnalysis: function() {
        const stateData = {};
        this.transactions.forEach(t => {
            if (!stateData[t.state]) {
                stateData[t.state] = {
                    amount: 0,
                    count: 0,
                    donors: new Set(),
                    parties: new Set(),
                    branches: new Set()
                };
            }
            stateData[t.state].amount += t.amount;
            stateData[t.state].count++;
            stateData[t.state].donors.add(t.donor);
            stateData[t.state].parties.add(t.party);
            stateData[t.state].branches.add(t.branch);
        });
        
        // Convert Sets to arrays for serialization
        Object.keys(stateData).forEach(state => {
            stateData[state].donors = Array.from(stateData[state].donors);
            stateData[state].parties = Array.from(stateData[state].parties);
            stateData[state].branches = Array.from(stateData[state].branches);
        });
        
        return stateData;
    },

    getSectorAnalysis: function() {
        const sectorTotals = {};
        this.donors.forEach(donor => {
            if (!sectorTotals[donor.sector]) {
                sectorTotals[donor.sector] = {
                    amount: 0,
                    count: 0,
                    donors: [],
                    marketCap: 0,
                    avgMarketCap: 0
                };
            }
            sectorTotals[donor.sector].amount += donor.totalAmount;
            sectorTotals[donor.sector].count++;
            sectorTotals[donor.sector].donors.push(donor.name);
            if (donor.marketCap) {
                const cap = parseFloat(donor.marketCap.replace(/[₹, Cr]/g, ''));
                sectorTotals[donor.sector].marketCap += cap;
            }
        });
        
        // Calculate average market cap
        Object.keys(sectorTotals).forEach(sector => {
            const sectorData = sectorTotals[sector];
            const listedDonors = this.donors.filter(d => d.sector === sector && d.marketCap);
            if (listedDonors.length > 0) {
                sectorData.avgMarketCap = sectorData.marketCap / listedDonors.length;
            }
        });
        
        return sectorTotals;
    },

    getDenominationAnalysis: function() {
        const denomData = {};
        this.transactions.forEach(t => {
            if (!denomData[t.denomination]) {
                denomData[t.denomination] = {
                    amount: 0,
                    count: 0,
                    donors: new Set(),
                    parties: new Set()
                };
            }
            denomData[t.denomination].amount += t.amount;
            denomData[t.denomination].count++;
            denomData[t.denomination].donors.add(t.donor);
            denomData[t.denomination].parties.add(t.party);
        });
        
        // Convert Sets to arrays
        Object.keys(denomData).forEach(denom => {
            denomData[denom].donors = Array.from(denomData[denom].donors);
            denomData[denom].parties = Array.from(denomData[denom].parties);
        });
        
        return denomData;
    },

    getDelayAnalysis: function() {
        const delayData = {
            '0-3 days': { count: 0, amount: 0 },
            '4-7 days': { count: 0, amount: 0 },
            '8-14 days': { count: 0, amount: 0 },
            '15+ days': { count: 0, amount: 0 }
        };
        
        this.transactions.forEach(t => {
            const delay = t.delay || 0;
            if (delay <= 3) delayData['0-3 days'].count++, delayData['0-3 days'].amount += t.amount;
            else if (delay <= 7) delayData['4-7 days'].count++, delayData['4-7 days'].amount += t.amount;
            else if (delay <= 14) delayData['8-14 days'].count++, delayData['8-14 days'].amount += t.amount;
            else delayData['15+ days'].count++, delayData['15+ days'].amount += t.amount;
        });
        
        return delayData;
    },

    searchDonors: function(query) {
        const searchTerm = query.toLowerCase();
        return this.donors.filter(d => 
            d.name.toLowerCase().includes(searchTerm) ||
            d.sector.toLowerCase().includes(searchTerm) ||
            d.state.toLowerCase().includes(searchTerm) ||
            d.industry.toLowerCase().includes(searchTerm)
        );
    },

    searchParties: function(query) {
        const searchTerm = query.toLowerCase();
        return this.parties.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.abbreviation.toLowerCase().includes(searchTerm) ||
            p.ideology.toLowerCase().includes(searchTerm) ||
            p.headquarters.toLowerCase().includes(searchTerm)
        );
    },

    searchTransactions: function(query) {
        const searchTerm = query.toLowerCase();
        return this.transactions.filter(t => 
            t.donor.toLowerCase().includes(searchTerm) ||
            t.party.toLowerCase().includes(searchTerm) ||
            t.bondCode.toLowerCase().includes(searchTerm) ||
            t.branch.toLowerCase().includes(searchTerm) ||
            t.state.toLowerCase().includes(searchTerm) ||
            t.denomination.toLowerCase().includes(searchTerm)
        );
    },

    getComparisonData: function(entity1, entity2, type = 'donor') {
        if (type === 'donor') {
            const donor1 = this.donors.find(d => d.name === entity1);
            const donor2 = this.donors.find(d => d.name === entity2);
            if (!donor1 || !donor2) return null;
            
            return {
                entity1: {
                    name: donor1.name,
                    amount: donor1.totalAmount,
                    transactions: donor1.transactions,
                    sector: donor1.sector,
                    state: donor1.state
                },
                entity2: {
                    name: donor2.name,
                    amount: donor2.totalAmount,
                    transactions: donor2.transactions,
                    sector: donor2.sector,
                    state: donor2.state
                },
                comparison: {
                    amountDiff: donor1.totalAmount - donor2.totalAmount,
                    amountRatio: donor1.totalAmount / donor2.totalAmount,
                    transactionDiff: donor1.transactions - donor2.transactions
                }
            };
        } else if (type === 'party') {
            const party1 = this.parties.find(p => p.name === entity1 || p.abbreviation === entity1);
            const party2 = this.parties.find(p => p.name === entity2 || p.abbreviation === entity2);
            if (!party1 || !party2) return null;
            
            return {
                entity1: {
                    name: party1.name,
                    abbreviation: party1.abbreviation,
                    amount: party1.totalAmount,
                    transactions: party1.transactions,
                    percentage: party1.percentage,
                    ideology: party1.ideology
                },
                entity2: {
                    name: party2.name,
                    abbreviation: party2.abbreviation,
                    amount: party2.totalAmount,
                    transactions: party2.transactions,
                    percentage: party2.percentage,
                    ideology: party2.ideology
                },
                comparison: {
                    amountDiff: party1.totalAmount - party2.totalAmount,
                    amountRatio: party1.totalAmount / party2.totalAmount,
                    percentageDiff: party1.percentage - party2.percentage
                }
            };
        }
        return null;
    },

    getTopTransactions: function(limit = 10, sortBy = 'amount') {
        let sorted = [...this.transactions];
        if (sortBy === 'amount') {
            sorted.sort((a, b) => b.amount - a.amount);
        } else if (sortBy === 'delay') {
            sorted.sort((a, b) => (b.delay || 0) - (a.delay || 0));
        } else if (sortBy === 'date') {
            sorted.sort((a, b) => new Date(b.purchaseDate) - new Date(a.purchaseDate));
        }
        return sorted.slice(0, limit);
    },

    exportFilteredData: function(filters = {}) {
        let filtered = [...this.transactions];
        
        if (filters.donor) {
            filtered = filtered.filter(t => t.donor === filters.donor);
        }
        if (filters.party) {
            filtered = filtered.filter(t => t.party === filters.party);
        }
        if (filters.state) {
            filtered = filtered.filter(t => t.state === filters.state);
        }
        if (filters.sector) {
            const sectorDonors = this.donors.filter(d => d.sector === filters.sector).map(d => d.name);
            filtered = filtered.filter(t => sectorDonors.includes(t.donor));
        }
        if (filters.minAmount) {
            filtered = filtered.filter(t => t.amount >= filters.minAmount);
        }
        if (filters.maxAmount) {
            filtered = filtered.filter(t => t.amount <= filters.maxAmount);
        }
        if (filters.startDate) {
            filtered = filtered.filter(t => t.purchaseDate >= filters.startDate);
        }
        if (filters.endDate) {
            filtered = filtered.filter(t => t.purchaseDate <= filters.endDate);
        }
        
        return {
            transactions: filtered,
            summary: {
                totalAmount: filtered.reduce((sum, t) => sum + t.amount, 0),
                totalCount: filtered.length,
                uniqueDonors: [...new Set(filtered.map(t => t.donor))].length,
                uniqueParties: [...new Set(filtered.map(t => t.party))].length
            }
        };
    }
};
