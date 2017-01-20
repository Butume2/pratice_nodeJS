
/* Drop Tables */

DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS task_priorities;
DROP TABLE IF EXISTS task_statuses;




/* Create Tables */

CREATE TABLE comments
(
	-- コメントid
	id serial NOT NULL,
	-- コメント内容
	content text NOT NULL,
	-- コメント作成日時
	comment_time timestamp,
	-- コメント付与先タスクID
	task_id int NOT NULL,
	PRIMARY KEY (id)
) WITHOUT OIDS;


CREATE TABLE members
(
	-- メンバーid
	id serial NOT NULL,
	-- 社員番号
	code text NOT NULL,
	-- 性
	first_name text,
	-- 名
	last_name text,
	PRIMARY KEY (id)
) WITHOUT OIDS;


CREATE TABLE projects
(
	id serial NOT NULL,
	-- プロジェクト名
	name text,
	-- 開始日
	start_day date,
	-- 終了日
	end_day date,
	PRIMARY KEY (id)
) WITHOUT OIDS;


CREATE TABLE tasks
(
	id serial NOT NULL,
	-- タスク名商
	name text NOT NULL,
	-- タスク内容
	content text,
	-- 開始日
	start_day date,
	-- 終了日
	end_day date,
	-- ステータスID
	status_id int NOT NULL UNIQUE,
	-- 優先度ID
	priority_id int NOT NULL UNIQUE,
	-- メンバーid
	member_id int NOT NULL,
	-- プロジェクトID
	project_id int NOT NULL,
	-- 親タスクID
	parent_task_id int,
	PRIMARY KEY (id)
) WITHOUT OIDS;


CREATE TABLE task_priorities
(
	id serial NOT NULL UNIQUE,
	-- 優先度名
	name text NOT NULL,
	PRIMARY KEY (id)
) WITHOUT OIDS;


CREATE TABLE task_statuses
(
	id serial NOT NULL UNIQUE,
	-- ステータス名
	name text NOT NULL,
	PRIMARY KEY (id)
) WITHOUT OIDS;



/* Create Foreign Keys */

ALTER TABLE tasks
	ADD FOREIGN KEY (member_id)
	REFERENCES members (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE tasks
	ADD FOREIGN KEY (project_id)
	REFERENCES projects (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE comments
	ADD FOREIGN KEY (task_id)
	REFERENCES tasks (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE tasks
	ADD FOREIGN KEY (parent_task_id)
	REFERENCES tasks (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE tasks
	ADD FOREIGN KEY (priority_id)
	REFERENCES task_priorities (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE tasks
	ADD FOREIGN KEY (status_id)
	REFERENCES task_statuses (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;



/* Comments */

COMMENT ON COLUMN comments.id IS 'コメントid';
COMMENT ON COLUMN comments.content IS 'コメント内容';
COMMENT ON COLUMN comments.comment_time IS 'コメント作成日時';
COMMENT ON COLUMN comments.task_id IS 'コメント付与先タスクID';
COMMENT ON COLUMN members.id IS 'メンバーid';
COMMENT ON COLUMN members.code IS '社員番号';
COMMENT ON COLUMN members.first_name IS '性';
COMMENT ON COLUMN members.last_name IS '名';
COMMENT ON COLUMN projects.name IS 'プロジェクト名';
COMMENT ON COLUMN projects.start_day IS '開始日';
COMMENT ON COLUMN projects.end_day IS '終了日';
COMMENT ON COLUMN tasks.name IS 'タスク名商';
COMMENT ON COLUMN tasks.content IS 'タスク内容';
COMMENT ON COLUMN tasks.start_day IS '開始日';
COMMENT ON COLUMN tasks.end_day IS '終了日';
COMMENT ON COLUMN tasks.status_id IS 'ステータスID';
COMMENT ON COLUMN tasks.priority_id IS '優先度ID';
COMMENT ON COLUMN tasks.member_id IS 'メンバーid';
COMMENT ON COLUMN tasks.project_id IS 'プロジェクトID';
COMMENT ON COLUMN tasks.parent_task_id IS '親タスクID';
COMMENT ON COLUMN task_priorities.name IS '優先度名';
COMMENT ON COLUMN task_statuses.name IS 'ステータス名';



