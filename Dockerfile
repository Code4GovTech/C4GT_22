# Use the official Python 3.8 image as the base image
FROM python:3.8-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the requirements.txt file to the container's /app directory
COPY requirements.txt .

# Install the required Python packages using pip
RUN pip install -r requirements.txt

# Copy the contents of the current directory to the container's /app directory
COPY . .

# Expose port 8000 for the Django server to listen on
EXPOSE 8000

# Set the DJANGO_SETTINGS_MODULE environment variable to C4GT.settings
ENV DJANGO_SETTINGS_MODULE=C4GT.settings

# Set the PYTHONUNBUFFERED environment variable to 1 to disable Python's buffering of stdout and stderr
ENV PYTHONUNBUFFERED=1

# Start the Django development server using the manage.py script
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
