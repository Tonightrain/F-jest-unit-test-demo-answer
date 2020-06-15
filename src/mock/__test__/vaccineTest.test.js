import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();
const mockHasAntibodies = jest.fn(() => false);

jest.mock("../recipient", () => {
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInjection,
      hasAntibodies: mockHasAntibodies,
    };
  });
});

beforeEach(() => {
  Recipient.mockClear();
  mockAcceptInjection.mockClear();
  mockHasAntibodies.mockReset();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    const vaccineTest = new VaccineTest();
    vaccineTest.inject();

    expect(mockAcceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    const vaccineTest = new VaccineTest();
    mockHasAntibodies.mockImplementation(() => true);

    expect(vaccineTest.test()).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    const vaccineTest = new VaccineTest();

    expect(vaccineTest.test()).toBe("Vaccine Test Failed");
  });
});
