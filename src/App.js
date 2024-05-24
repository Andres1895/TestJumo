import { useState } from "react";
import "./App.css";
import { Main } from "./assets";
import { Header, Footer, Input } from "./components";
import {
  Container,
  InfoContainer,
  Title,
  Text,
  Image,
  FormContainer,
  StyledButton,
} from "./styles";

function App() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [challenges, setChallenges] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/18956609/3ve5tqz/",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            company,
            companySize,
            challenges,
          }),
        }
      );
      if (response.ok) {
        alert("Lead data submitted successfully");
      } else {
        alert("Failed to submit lead data");
      }
    } catch (error) {
      console.error("Error submitting lead data:", error);
      alert("Error submitting lead data");
    }
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <InfoContainer>
          <Title>
            The Performance Max
            <br />
            Optimization Blueprint -
          </Title>
          <Title isHighlighted>Scale to $50k/day</Title>
          <Text>
            Performance Max is one of the most powerful tools to scale revenue
            on Google, if you know how to use it. Steal our winning strategies
            to scale on PMAX effortlessly.
          </Text>
          <Image src={Main} alt="main" />
        </InfoContainer>
        <FormContainer>
          <Input
            label="What is your name?"
            onChange={(value) => setName(value.target.value)}
            value={name}
            placeholder="i. e John Ford"
          />
          <Input
            label="What is your company email?"
            onChange={(value) => setCompany(value.target.value)}
            value={company}
            placeholder="Type your answer"
          />
          <Input
            label="How large is your company?"
            onChange={(value) => setCompanySize(value.target.value)}
            value={companySize}
            placeholder="Total employee size"
          />
          <Input
            label="Current Marketing Challenges?"
            onChange={(value) => setChallenges(value.target.value)}
            value={challenges}
            placeholder="Choose multiple options"
          />
          <StyledButton
            onClick={() => {
              handleSubmit();
            }}
          >
            {" "}
            VIEW THE PMAX OPTIMIZATION BIBLE
          </StyledButton>
        </FormContainer>
      </Container>
      <Container />
      <Footer />
    </div>
  );
}

export default App;
