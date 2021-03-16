import {
  LabelStyled,
  InputFieldStyled,
  FieldSetStyled,
  LegendStyled,
} from "../../styles";

const PassengerForm = ({ number, handleChange, passengers }) => {
  return (
    <FieldSetStyled>
      <LegendStyled>
        <h2>{number == 0 ? "Lead Passenger" : `Passenger #${+number + 1}`}</h2>
        <LabelStyled>
          First Name:
          <InputFieldStyled
            type="text"
            name="firstName"
            value={passengers[number].firstName}
            onChange={handleChange}
            id={number}
          />
        </LabelStyled>

        <LabelStyled>
          Last Name:
          <InputFieldStyled
            type="text"
            name="lastName"
            value={passengers[number].lastName}
            onChange={handleChange}
            id={number}
          />
        </LabelStyled>
        <LabelStyled>
          Passport:
          <InputFieldStyled
            type="text"
            name="passport"
            value={passengers[number].passport}
            onChange={handleChange}
            id={number}
          />
        </LabelStyled>
        <LabelStyled>
          Email:
          <InputFieldStyled
            type="text"
            name="email"
            value={passengers[number].email}
            onChange={handleChange}
            id={number}
          />
        </LabelStyled>
        <LabelStyled>
          Date of Birth
          <InputFieldStyled
            type="date"
            className="form-control"
            placeholder="date"
            aria-label="date"
            aria-describedby="basic-addon1"
            name="birthDate"
            onChange={handleChange}
            value={passengers[number].birthDate}
            id={number}
          />
        </LabelStyled>
      </LegendStyled>
    </FieldSetStyled>
  );
};

export default PassengerForm;
