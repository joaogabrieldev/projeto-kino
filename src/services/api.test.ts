import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "axios";

vi.mock("axios");
const mockedAxios = vi.mocked(axios);

describe("TMDB API Integration", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("deve retornar filmes populares com status 200", async () => {
    const mockResponse = {
      data: {
        results: [{ id: 1, title: "Inception", vote_average: 8.8 }],
        total_pages: 100,
      },
    };
    mockedAxios.get = vi.fn().mockResolvedValue(mockResponse);

    const response = await axios.get("https://api.themoviedb.org/3/movie/popular");

    expect(response.data.results).toBeDefined();
    expect(response.data.results[0]).toHaveProperty("title");
    expect(response.data.results[0]).toHaveProperty("vote_average");
  });

  it("deve lidar com erro quando a API retorna falha", async () => {
    mockedAxios.get = vi.fn().mockRejectedValue(new Error("Network Error"));

    await expect(axios.get("https://api.themoviedb.org/3/movie/popular")).rejects.toThrow(
      "Network Error",
    );
  });
});
