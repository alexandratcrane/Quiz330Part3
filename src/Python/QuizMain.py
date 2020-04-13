# from src.Python import answer
from src.Python import creator


def main():
    print("Would you like to create a quiz, or answer quizzes that have been made?")
    quiz_or_answer = input("Type answer or create: ")
    default_file = 'example.json'
    if quiz_or_answer == "answer" or quiz_or_answer == "Answer":
        filename = input(
            "Which quiz do you want to answer?\nType the full filename\nType DEFAULT for the hardcoded example ")
        if filename == "default" or filename == "DEFAULT":
            # answer.main(default_file)
            print("Not implemented yet")
        else:
            try:
                # answer.main(filename)
                print("Not implemented yet")
            except AttributeError:
                print("No file given, try again!")
    elif quiz_or_answer == "create" or quiz_or_answer == "Create":
        creator.main()
    else:
        print("Error")


main()
