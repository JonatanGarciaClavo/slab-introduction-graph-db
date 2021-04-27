import React from "react";

import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Box,
  Image,
  CodePane,
  Notes,
  Link,
} from "spectacle";
import sytacLogo from "./logo.svg";
import propertyGraphElements from "./property_graph_elements.jpeg";
import playCypher from "./play-cypher.png";
import movies from "./movies.png";

// SPECTACLE_CLI_THEME_START
const theme = {
  colors: {
    primary: "#1a2531",
    secondary: "#EF9A3B",
    tertiary: "#ffffff",
  },
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = (...args) => (
  <FlexBox justifyContent="space-between" position="absolute" bottom={0} width={1}>
    <Box padding="1em">
      <Image src={sytacLogo} size={50} />
    </Box>
    <Box padding="1em">
      <Progress color="#1a2531" />
    </Box>
    <Box padding="0 1em">
      <FullScreen color="primary" />
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Box>
          <Image src={sytacLogo} size={400} />
        </Box>
        <Box>
          <Heading margin="0px 32px" color="primary" fontSize="h2">
            Slab: Introduction to graph databases
          </Heading>
        </Box>
      </FlexBox>
      <Notes>
        Spectacle supports notes per slide.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
        </ol>
      </Notes>
    </Slide>
    <Slide>
      <Heading>Who am I?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Jonatan García Clavo</ListItem>
        </Appear>
        <Appear>
          <ListItem>🇪🇸: 🥘 💃 </ListItem>
        </Appear>
        <Appear>
          <ListItem>Frontend developer(⚛︎) 🤔</ListItem>
        </Appear>
        <Appear>
          <ListItem>Ok ok, I am Software engineer 🤓</ListItem>
        </Appear>
        <Appear>
          <ListItem>🎛 🎚 🎶</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>What is graph database?</Heading>
      <FlexBox justifyContent="center" alignItems="center" height="100%">
        <Text textAlign="center" fontSize="h3">
          It is a database that uses graph structures for semantic queries with nodes, edges, and
          properties to represent and store data.
        </Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>What is graph database?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>NoSQL type</ListItem>
        </Appear>
        <Appear>
          <ListItem>Graph structures/models</ListItem>
        </Appear>
        <Appear>
          <ListItem>Nodes</ListItem>
        </Appear>
        <Appear>
          <ListItem>Edges/Relationships</ListItem>
        </Appear>
        <Appear>
          <ListItem>Properties</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>What is a Node?</Heading>
      <Text textAlign="center" fontSize="h3">
        Represent entities or instances
      </Text>
      <UnorderedList>
        <Appear>
          <ListItem>People, businesses, accounts, or any other item to be tracked</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            The "equivalent" of a record, relation, or row in a relational database
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>A document in a document-store database</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>What is a Edge?</Heading>
      <Text textAlign="center" fontSize="h3">
        They are the lines that connect nodes to other nodes
      </Text>
      <UnorderedList>
        <Appear>
          <ListItem>Meaningful patterns emerge when examining the connections</ListItem>
        </Appear>
        <Appear>
          <ListItem>It can either be directed or undirected</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            This abstraction is not directly implemented in a relational model or a document-store
            model.
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>What is Properties?</Heading>
      <Text textAlign="center" fontSize="h3">
        It is the information associated to nodes
      </Text>
      <UnorderedList>
        <Appear>
          <ListItem>Relational model "equivalent" row content</ListItem>
        </Appear>
        <Appear>
          <ListItem>Document-store "equivalent" to document content</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>What is a graph structure/model?</Heading>
      <Text textAlign="center" fontSize="h3">
        It is an abstract data type that is meant to implement the undirected graph and directed
        graph concepts from the field of graph theory within a math
      </Text>
      <UnorderedList>
        <Appear>
          <ListItem>Labeled-property graph</ListItem>
        </Appear>
        <Appear>
          <ListItem>Resource Description Framework</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>What is a Labeled-property graph?</Heading>
      <Text textAlign="center" fontSize="h3">
        It graph model is represented by a set of nodes, relationships, properties, and labels
      </Text>
      <UnorderedList>
        <Appear>
          <ListItem>
            Both nodes and their relationships are named and can store properties represented by
            key/value pairs
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Nodes can be labeled to be grouped</ListItem>
        </Appear>
        <Appear>
          <ListItem>Relations between node must be directed</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Example Labeled-property graph</Heading>
      <Image src={propertyGraphElements} width="100%" />
    </Slide>
    <Slide>
      <Heading>Why graph databases?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            We live in a connected world! There are no isolated pieces of information, but rich,
            connected domains all around us
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Accessing nodes and relationships in a native graph database is an efficient,
            constant-time operation and allows you to quickly traverse millions of connections per
            second per core
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>What is Neo4j?</Heading>
      <Text textAlign="center" fontSize="h3">
        It is an open-source, NoSQL, native graph database that provides an ACID-compliant
        transactional backend for your applications
      </Text>
      <UnorderedList>
        <Appear>
          <ListItem>Cypher</ListItem>
        </Appear>
        <Appear>
          <ListItem>Constant time traversals</ListItem>
        </Appear>
        <Appear>
          <ListItem>Flexible</ListItem>
        </Appear>
        <Appear>
          <ListItem>Drivers</ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <ol>
          <li>
            Cypher, a declarative query language similar to SQL, but optimized for graphs. Now used
            by other databases like SAP HANA Graph and Redis graph via the openCypher project.
          </li>
          <li>
            Constant time traversals in big graphs for both depth and breadth due to efficient
            representation of nodes and relationships. Enables scale-up to billions of nodes on
            moderate hardware.
          </li>
          <li>
            Flexible property graph schema that can adapt over time, making it possible to
            materialize and add new relationships later to shortcut and speed up the domain data
            when the business needs change.
          </li>
          <li>
            Drivers for popular programming languages, including Java, JavaScript, .NET, Python, and
            many more.
          </li>
        </ol>
      </Notes>
    </Slide>
    <Slide>
      <Heading>What is Cypher?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Syntax provides a visual and logical way to match patterns of nodes and relationships in
            the graph
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            It is a declarative, SQL-inspired language for describing visual patterns in graphs
            using ASCII-Art syntax
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Users can construct expressive and efficient queries to handle needed CRUD functionality
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>It is also open source</ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <ol>
          <li>
            Graph query language that allows users to store and retrieve data from the graph
            database
          </li>
        </ol>
      </Notes>
    </Slide>
    <Slide>
      <Heading>How Cypher look's like?</Heading>
      <FlexBox style={{ flexFlow: "wrap" }} justifyContent="space-between" alignItems="flex-start">
        <FlexBox width="53%" flexDirection="column" style={{ flexFlow: "wrap" }}>
          <Text textAlign="center">SQL</Text>
          <CodePane language="sql">{`
SELECT p2.person_name 
FROM people p1 
JOIN friend ON (p1.person_id = friend.person_id)
JOIN people p2 ON (p2.person_id = friend.friend_id)
WHERE p1.person_name = 'Jack';
        `}</CodePane>
        </FlexBox>
        <FlexBox width="45%" flexDirection="column" style={{ flexFlow: "wrap" }}>
          <Text textAlign="center">Cypher</Text>
          <CodePane language="cypher">{`
MATCH (p1:person)-[:FRIEND-WITH]-(p2:person)
WHERE p1.name = "Jack"
RETURN p2.name
        `}</CodePane>
        </FlexBox>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Introduction to Cypher</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Go to{" "}
            <Link target="blank" href="https://neo4j.com/sandbox/?ref=developer-start">
              Neo4j sandbox
            </Link>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Click into 'Launch the Free Sandbox'</ListItem>
        </Appear>
        <Appear>
          <ListItem>Login with any of the SSO options</ListItem>
        </Appear>
        <Appear>
          <ListItem>Click 'New project' --> 'Blank sandbox'</ListItem>
        </Appear>
        <Appear>
          <ListItem>Click 'Open'</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Write in the 'neo4j$' input -> <CodeSpan>:play cypher</CodeSpan>
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Introduction to Cypher</Heading>
      <FlexBox>
        <Image src={playCypher} width={500}></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>S1: Movies</Heading>
      <UnorderedList>
        <ListItem>Click 'New project' --> 'Movies'</ListItem>
        <ListItem>Click 'Open'</ListItem>
        <ListItem>
          Write in the 'neo4j$' input -> <CodeSpan>CALL db.schema.visualization();</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>S1: Movies</Heading>
      <FlexBox>
        <Image src={movies} width={900}></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>S2: Women's World Cup 2019</Heading>
      <UnorderedList>
        <ListItem>Click 'New project' --> 'Women's World Cup 2019'</ListItem>
        <ListItem>Click 'Open'</ListItem>
        <ListItem>
          🚨 Please save 🚨
          <br></br>
          <CodeSpan fontSize="30px">
            :play https://guides.neo4j.com/sandbox/wwc2019/index.html
          </CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>S3: Recommendations</Heading>
      <UnorderedList>
        <ListItem>Click 'New project' --> 'Recommendations'</ListItem>
        <ListItem>Click 'Open'</ListItem>
        <ListItem>
          🚨 Please save 🚨
          <br></br>
          <CodeSpan fontSize="30px">
            :play https://guides.neo4j.com/sandbox/recommendations/index.html
          </CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>One more thing</Heading>
      <UnorderedList>
        <ListItem>Data Import(neo4j-admin)</ListItem>
        <ListItem>
          Drivers for Popular Programming Languages(.Net, Java, JavaScript, and Python)
        </ListItem>
        <ListItem>Extensions and Integrations(apoc, algo, etc.)</ListItem>
        <ListItem>Clustering, Read only, etc</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Recap</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Graph dbs are cool!</ListItem>
        </Appear>
        <Appear>
          <ListItem>Optimized for fast traversal</ListItem>
        </Appear>
        <Appear>
          <ListItem>ACID</ListItem>
        </Appear>
        <Appear>
          <ListItem>Graph visualization helps to detect patterns</ListItem>
        </Appear>
        <Appear>
          <ListItem>Query language used is quite visual</ListItem>
        </Appear>
        <Appear>
          <ListItem>It make's easy to analyze data</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Thank you</Heading>
      <FlexBox flexDirection="column" justifyContent="center" alignItems="center" height="80%">
        <FlexBox>
          <Image src="https://media.giphy.com/media/QAsBwSjx9zVKoGp9nr/source.gif" />
        </FlexBox>
      </FlexBox>
    </Slide>
  </Deck>
);

export default Presentation;
