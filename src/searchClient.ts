class SearchClient {
  constructor({ host, username, password }) {
    this.host = host;
    this.username = username;
    this.password = password;
  }

  index(indexUid) {
    this.indexUid = indexUid;
    return this; // Return `this` to allow chaining
  }

  async search(query, options = {}) {
    return {
      ok: true,
          hits: [
            {
              _index: "docs-v1",
              _type: "_doc",
              _id: "284689",
              _score: 1.0,
              _source: {
                id: 284689,
                title: "Testament of Youth",
                overview:
                  "Testament of Youth is a powerful story of love, war and remembrance, based on the First World War memoir by Vera Brittain, which has become the classic testimony of that war from a woman’s point of view. A searing journey from youthful hopes and dreams to the edge of despair and back again, it’s a film about young love, the futility of war and how to make sense of the darkest times.",
              },
            },
            {
              _index: "docs-v1",
              _type: "_doc",
              _id: "226979",
              _score: 1.0,
              _source: {
                id: 226979,
                title: "Test",
                overview:
                  "San Francisco, 1985. Two opposites attract at a modern dance company. Together, their courage and resilience are tested as they navigate a world full of risks and promise, against the backdrop of a disease no one seems to know anything about.",
              },
            },
            {
              _index: "docs-v1",
              _type: "_doc",
              _id: "21259",
              _score: 1.0,
              _source: {
                id: 21259,
                title: "Testament",
                overview:
                  "It is just another day in the small town of Hamlin until something disastrous happens. Suddenly, news breaks that a series of nuclear warheads has been dropped along the Eastern Seaboard and, more locally, in California. As people begin coping with the devastating aftermath of the attacks — many suffer radiation poisoning — the Wetherly family tries to survive.",
              },
            },
            {
              _index: "docs-v1",
              _type: "_doc",
              _id: "880728",
              _score: 1.0,
              _source: {
                id: 880728,
                title: "The Test",
                overview:
                  "Annie lives in harmony with her husband Laurent and her children: the sensitive elders Maximilien and César; the younger Antoine whom Poupi, never-complaining teen, helps raising him. But a positive pregnancy test will disturb the harmony.",
              },
            },
            {
              _index: "docs-v1",
              _type: "_doc",
              _id: "401123",
              _score: 1.0,
              _source: {
                id: 401123,
                title: "Beta Test",
                overview:
                  "While testing the latest first person shooter from global game developer, Sentinel, video game champion Max Troy discovers the events happening within the game are being reflected in the real world. He soon determines that the game's protagonist is real-life Orson Creed, an ex-Sentinel employee who is being remotely controlled by the corporation for reasons unknown. As virtual and real worlds collide, Max and Creed must join forces to unravel the conspiracy before the game's sinister events escalate and overwhelm the city.",
              },
            },
            {
              _index: "docs-v1",
              _type: "_doc",
              _id: "12206",
              _score: 1.0,
              _source: {
                id: 12206,
                title: "The Testament of Dr. Mabuse",
                overview:
                  "After a detective is assaulted by thugs and placed in an asylum run by Professor Baum, he observes the professor's preoccupation with another patient, the criminal genius Dr. Mabuse the hypnotist. When Mabuse's notes are found to be connected with a rash of recent crimes, Commissioner Lohmann must determine how Mabuse is communicating with the criminals, despite conflicting reports on the doctor's whereabouts, and capture him for good.",
              },
            },
            {
              _index: "docs-v1",
              _type: "_doc",
              _id: "749645",
              _score: 1.0,
              _source: {
                id: 749645,
                title: "The Beta Test",
                overview:
                  "An engaged Hollywood agent receives a mysterious letter for an anonymous sexual encounter and becomes ensnared in a sinister world of lying, infidelity, and digital data.",
              },
            },
            {
              _index: "docs-v1",
              _type: "_doc",
              _id: "330764",
              _score: 1.0,
              _source: {
                id: 330764,
                title: "The Brand New Testament",
                overview:
                  "God lives in Brussels. On Earth though, God is a coward, with pathetical morals and being odious with his family. His daughter, Ea, is bored at home and can't stand being locked up in a small apartment in ordinary Brussels, until the day she decides to revolt against her dad...",
              },
            },
            {
              _index: "docs-v1",
              _type: "_doc",
              _id: "17445",
              _score: 1.0,
              _source: {
                id: 17445,
                title: "Green Lantern: First Flight",
                overview:
                  "Test pilot Hal Jordan finds himself recruited as the newest member of the intergalactic police force, The Green Lantern Corps.",
              },
            },
            {
              _index: "docs-v1",
              _type: "_doc",
              _id: "2614",
              _score: 1.0,
              _source: {
                id: 2614,
                title: "Innerspace",
                overview:
                  "Test pilot Tuck Pendleton volunteers to test a special vessel for a miniaturization experiment. Accidentally injected into a neurotic hypochondriac, Jack Putter, Tuck must convince Jack to find his ex-girlfriend, Lydia Maxwell, to help him extract Tuck and his ship and re-enlarge them before his oxygen runs out.",
              },
            },
          ]
    };
  }

  async search1(query, options = {}) {
    const encodedCredentials = btoa(`${this.username}:${this.password}`);
    const headers = {
      Authorization: `Basic ${encodedCredentials}`,
      "Content-Type": "application/json",
    };

    const url = `${this.host}/${this.indexUid}/_search`; // Use this.indexUid
    const body = JSON.stringify({ query: { ...options.query } }); // Add other options as needed

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
      rejectUnauthorized: false,
    });

    if (!response.ok) {
      throw new Error(`Search request failed with status ${response.status}`);
    }

    return await response.json();
  }
}

export { SearchClient };
