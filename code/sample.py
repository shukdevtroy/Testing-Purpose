import os
from dataclasses import dataclass


@dataclass
class Repo:
    name: str
    stars: int = 0

    def label(self) -> str:
        return f"{self.name} ({self.stars}★)"


def main():
    repos = [Repo("gitkit", 42), Repo("zaphalt")]
    for r in repos:
        print(r.label())  # prints each repo
    print(os.getcwd())


if __name__ == "__main__":
    main()
