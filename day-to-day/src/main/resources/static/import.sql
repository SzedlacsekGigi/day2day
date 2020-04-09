INSERT INTO category (category_name) VALUES ('Mental');
INSERT INTO category (category_name) VALUES ('Physical');
INSERT INTO category (category_name) VALUES ('Mind');
INSERT INTO category (category_name) VALUES ('Social');
INSERT INTO category (category_name) VALUES ('Surroundings');
INSERT INTO category (category_name) VALUES ('Tasks');

INSERT INTO subcategory (subcategory_name, relevant_question, category) VALUES ('Workout', 'What kind of workout have you done?', Physical);
INSERT INTO subcategory (subcategory_name, relevant_question, category) VALUES ('Learning', 'What did you learned today?', Mind);
INSERT INTO subcategory (subcategory_name, relevant_question, category) VALUES ('Meditation', 'How was your practice?', Mental);
INSERT INTO subcategory (subcategory_name, relevant_question, category) VALUES ('Phone call', 'Who do you talked to on the phone?', Social);
INSERT INTO subcategory (subcategory_name, relevant_question, category) VALUES ('Cleaning the house', 'Which chores have you done?', Surroundings);
INSERT INTO subcategory (subcategory_name, relevant_question, category) VALUES ('Work', 'Which tasks have you done?', Tasks);
