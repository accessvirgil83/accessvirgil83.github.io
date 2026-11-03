from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Твои данные, которые легко редактировать прямо здесь
    user_info = {
        "name": "Иван Иванов",
        "role": "Fullstack Python/Flask Developer",
        "bio": "Создаю быстрые веб-приложения и надежные API. Превращаю сложные задачи в лаконичный код.",
        "github": "https://github.com",
        "email": "your.email@example.com"
    }
    
    # Список твоих проектов
    projects = [
        {
            "title": "E-Commerce API",
            "description": "RESTful API для интернет-магазина на Flask и SQLAlchemy с интеграцией платежей.",
            "tags": ["Flask", "Python", "PostgreSQL", "Stripe"],
            "link": "https://github.com/project1"
        },
        {
            "title": "AI Text Summarizer",
            "description": "Веб-сервис, который сжимает длинные статьи с помощью интеграции нейросетей.",
            "tags": ["Python", "Flask", "OpenAI API", "Tailwind"],
            "link": "https://github.com/project2"
        }
    ]
    
    return render_template('index.html', user=user_info, projects=projects)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
